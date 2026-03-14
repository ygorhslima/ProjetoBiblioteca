using System;
using ProjetoBiblioteca.Api.Features.Emprestimos.Dtos;
using ProjetoBiblioteca.Api.Services;

namespace ProjetoBiblioteca.Api.Features.Emprestimos;

public static class EmprestimoEndpoint
{
    // Definimos nomes de constantes diferentes para evitar ambiguidade
    const string GetAllEmprestimosRoute = "GetAllEmprestimos";
    const string GetEmprestimoByIdRoute = "GetEmprestimoById";

    public static void MapEmprestimosEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/emprestimos");

        // GET: /api/emprestimos
        group.MapGet("/", async (IEmprestimoService service) =>
        {
            var emprestimos = await service.GetAllEmprestimosAsync();
            return Results.Ok(emprestimos);
        })
        .WithName(GetAllEmprestimosRoute);

        // GET: /api/emprestimos/{Id}
        group.MapGet("/{Id}", async (int Id, IEmprestimoService service) =>
        {
            var emprestimo = await service.GetEmprestimosByIdAsync(Id);
            
            if (emprestimo is null) 
                return Results.NotFound();
                
            return Results.Ok(emprestimo);
        })
        .WithName(GetEmprestimoByIdRoute); // Nome específico para busca por ID

        // POST: /api/emprestimos
        group.MapPost("/", async (CreateEmprestimoDto newEmprestimo, IEmprestimoService service) =>
        {
            var createdEmprestimo = await service.CreateEmprestimoAsync(newEmprestimo);
            
            // Aqui apontamos especificamente para a rota de busca por ID
            // O objeto anônimo 'new { Id = ... }' deve bater com o nome do parâmetro no MapGet
            return Results.CreatedAtRoute(
                GetEmprestimoByIdRoute, 
                new { Id = createdEmprestimo.Id }, 
                createdEmprestimo
            );
        });

        // PUT: /api/emprestimos/{Id}
        group.MapPut("/{Id}", async (int Id, UpdateEmprestimoDto updatedEmprestimo, IEmprestimoService service) =>
        {
            var success = await service.UpdateEmprestimoAsync(Id, updatedEmprestimo);
            return success ? Results.NoContent() : Results.NotFound();
        });

        // DELETE: /api/emprestimos/{Id}
        group.MapDelete("/{Id}", async (int Id, IEmprestimoService service) =>
        {
            var success = await service.DeleteEmprestimoAsync(Id);
            return success ? Results.NoContent() : Results.NotFound();
        });
    }
}