using System;
using Microsoft.EntityFrameworkCore;
using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Dtos;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Endpoints;

public static class LivrosEndpoint
{
    const string GetLivrosEndpointName = "GetGames";
    public static void MapLivrosEndpoints(this WebApplication app)
    {
        var api = app.MapGroup("/api");

        // obtendo todos os livros do banco de dados
        api.MapGet("/livros", async (BibliotecaContext dbContext) =>
         {
             var livros = await dbContext.livros
                 .Include(l => l.Area)
                 .Select(l => new LivroSummaryDto(
                     l.Codigo,
                     l.Titulo,
                     l.Autor,
                     l.Area!.Nome,
                     l.Ano,
                     l.Editora,
                     l.ImagemUrl
                 ))
                 .AsNoTracking()
                 .ToListAsync();

             return Results.Ok(livros); // Adicione o return aqui!
         });

        // obtendo somente o livro que tiver o código que o usuário procura
        api.MapGet("/livros/{codigo}", async (int codigo, BibliotecaContext dbContext) =>
        {
            var livro = await dbContext.livros.FindAsync(codigo);
            return livro is null ? Results.NotFound() : Results.Ok(
                new LivrosDetailsDto(
                    livro.Codigo,
                    livro.Titulo,
                    livro.Autor,
                    livro.Area.Id,
                    livro.Ano,
                    livro.Editora,
                    livro.ImagemUrl
                )
            );
        }).WithName(GetLivrosEndpointName);

        // adicionando um novo livro
        api.MapPost("/livros", async (CreateLivroDto newLivro, BibliotecaContext dbContext) =>
        {
            Livro livro = new()
            {
                Titulo = newLivro.Titulo,
                Autor = newLivro.Autor,
                AreaId = newLivro.AreaId,
                Ano = newLivro.Ano,
                Editora = newLivro.Editora,
                ImagemUrl = newLivro.ImagemUrl
            };
            dbContext.livros.Add(livro);
            await dbContext.SaveChangesAsync();

            var responseDto = new LivrosDetailsDto(
                livro.Codigo,
                livro.Titulo,
                livro.Autor,
                livro.AreaId,
                livro.Ano,
                livro.Editora,
                livro.ImagemUrl
            );
            return Results.CreatedAtRoute(GetLivrosEndpointName, new { Codigo = livro.Codigo }, responseDto);
        });

        // atualizando um livro a partir do código
        api.MapPut("/livros/{codigo}", async (int codigo, UpdateLivroDto updatedLivro, BibliotecaContext dbContext) =>
        {
            var existingLivro = await dbContext.livros.FindAsync(codigo);

            if (existingLivro is null) return Results.NotFound();

            existingLivro.Titulo = updatedLivro.Titulo;
            existingLivro.Autor = updatedLivro.Autor;
            existingLivro.Area.Id = updatedLivro.AreaId;
            existingLivro.Ano = updatedLivro.Ano;
            existingLivro.Editora = updatedLivro.Editora;
            existingLivro.ImagemUrl = updatedLivro.ImagemUrl;

            await dbContext.SaveChangesAsync();
            return Results.NoContent();
        });

        // deletando um livro a partir do código
        api.MapDelete("/livros/{codigo}", async (int codigo, BibliotecaContext dbContext) =>
        {
            await dbContext.livros.Where(l => l.Codigo == codigo).ExecuteDeleteAsync();
            return Results.NoContent();
        });

        api.MapGet("/area", async (BibliotecaContext dbContext) =>
        {
            var areas = await dbContext.areas
            .Select(a => new AreaSummaryDto(
                a.Id,
                a.Nome
            ))
            .AsNoTracking()
            .ToListAsync(); // Executa a busca no banco

            return Results.Ok(areas); // Retorna a lista para o Front-End
        });
    }
}
