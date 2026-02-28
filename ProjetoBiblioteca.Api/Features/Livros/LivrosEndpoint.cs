using System;
using Microsoft.EntityFrameworkCore;
using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Dtos;
using ProjetoBiblioteca.Api.Mapping;
using ProjetoBiblioteca.Api.Models;
using ProjetoBiblioteca.Api.Services;

namespace ProjetoBiblioteca.Api.Endpoints;

public static class LivrosEndpoint
{
    const string GetLivrosEndpointName = "GetLivros";
    public static void MapLivrosEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/livros");

        // obtendo todos os livros do banco de dados
        group.MapGet("/", async (ILivroService service) => Results.Ok(await service.GetAllLivrosAsync()));


        // obtendo somente o livro que tiver o código que o usuário procura
        group.MapGet("/{codigo}", async (int codigo, ILivroService service) =>
        {
            var livro = await service.GetLivrosByCodigoAsync(codigo);
            if (livro is null) return Results.NotFound();
            return Results.Ok(livro);
        }).WithName(GetLivrosEndpointName);


        // adicionando um novo livro
        group.MapPost("/", async (CreateLivroDto newLivro, ILivroService service) =>
        {
            var createdLivro = await service.CreateLivroAsync(newLivro);
            return Results.CreatedAtRoute(GetLivrosEndpointName, new { codigo = createdLivro.Codigo }, createdLivro);
        });

        // atualizando um livro a partir do código
        group.MapPut("/{codigo}", async (int codigo, UpdateLivroDto updatedLivro, ILivroService service) =>
        {
            var sucess = await service.UpdateLivroAsync(codigo, updatedLivro);
            return sucess ? Results.NoContent() : Results.NotFound();
        });

        // deletando um livro a partir do código
        group.MapDelete("/{codigo}", async (int codigo, ILivroService service) =>
        {
            var sucess = await service.DeleteLivroAsync(codigo);
            return sucess ? Results.NoContent() : Results.NotFound();
        });


    }
}
