using System;
using ProjetoBiblioteca.Api.Features.Usuarios.Dtos;

namespace ProjetoBiblioteca.Api.Features.Usuarios;

public static class UsuariosEndpoint
{
    const string GetUsuariosEndpoints = "GetUsuarios";
    public static void MapUsuariosEndpoint(this WebApplication app)
    {
        var group = app.MapGroup("/api/usuarios");
        // obter todos os usuários
        group.MapGet("/", async (IUsuarioService service) => Results.Ok(await service.GetAllUsuariosAsync()));

        // obter o usuário a partir do ID
        group.MapGet("/{id}", async (int id, IUsuarioService service) =>
        {
            var usuario = await service.GetUsuarioByIdAsync(id);
            if (usuario is null) return Results.NotFound();
            return Results.Ok(usuario);
        }).WithName(GetUsuariosEndpoints);

        // adicionar usuário
        group.MapPost("/", async (CreateUsuarioDto newUsuario, IUsuarioService service) =>
        {
            var createdUsuario = await service.CreateUsuarioAsync(newUsuario);
            return Results.CreatedAtRoute(GetUsuariosEndpoints, new { Id = createdUsuario.Id }, createdUsuario);
        });

        // editar usuário 
        group.MapPut("/{id}", async (int id, UpdateUsuarioDto updatedUsuario, IUsuarioService service) =>
        {
            var sucess = await service.UpdateUsuarioAsync(id, updatedUsuario);
            return sucess ? Results.NoContent() : Results.NotFound();
        });

        // deletar usuário
        group.MapDelete("/{id}", async (int id, IUsuarioService service) =>
        {
            var sucess = await service.DeleteUsuarioAsync(id);
            return sucess ? Results.NoContent() : Results.NotFound();
        });
    }
}
