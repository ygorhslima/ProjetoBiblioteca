using System;
using Microsoft.EntityFrameworkCore;
using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Dtos;
using ProjetoBiblioteca.Api.Mapping;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Endpoints;

public static class LivrosEndpoint
{


    const string GetLivrosEndpointName = "GetLivros";
    public static void MapLivrosEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/livros");

        // obtendo todos os livros do banco de dados
        group.MapGet("/", async (BibliotecaContext dbContext) => await dbContext.livros
        .Include(l => l.Area)
        .Select(l => l.ToSummaryDto())
        .AsNoTracking()
        .ToListAsync());

        // obtendo somente o livro que tiver o código que o usuário procura
        group.MapGet("/{codigo}", async (int codigo, BibliotecaContext dbContext) => await dbContext.livros
        .Include(l => l.Area)
        .FirstOrDefaultAsync(l => l.Codigo == codigo)
        is Livro livro
        ? Results.Ok(livro.ToDetailsDto())
        : Results.NotFound())
        .WithName(GetLivrosEndpointName);


        // adicionando um novo livro
        group.MapPost("/", async (CreateLivroDto newLivro, BibliotecaContext dbContext) =>
        {
            var livro = newLivro.ToEntity();
            
            dbContext.livros.Add(livro);
            
            await dbContext.SaveChangesAsync();

            return Results.CreatedAtRoute(GetLivrosEndpointName, new { Codigo = livro.Codigo }, livro.ToDetailsDto());
        });

        // atualizando um livro a partir do código
        group.MapPut("/{codigo}", async (int codigo, UpdateLivroDto updatedLivro, BibliotecaContext dbContext) =>
        {
            var existingLivro = await dbContext.livros.FindAsync(codigo);

            if (existingLivro is null) return Results.NotFound();

            existingLivro.UpdateEntity(updatedLivro);

            await dbContext.SaveChangesAsync();
            return Results.NoContent();
        });

        // deletando um livro a partir do código
        group.MapDelete("/{codigo}", async (int codigo, BibliotecaContext dbContext) =>
        {
            await dbContext.livros.Where(l => l.Codigo == codigo).ExecuteDeleteAsync();
            return Results.NoContent();
        });

    
    }
}
