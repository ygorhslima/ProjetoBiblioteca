using System;
using ProjetoBiblioteca.Api.Features.Usuarios.Dtos;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Features.Usuarios;

public static class UsuariosMapping
{
    public static UsuarioSummaryDto ToSummaryDto(this Usuario usuario)
    {
        return new UsuarioSummaryDto(
            usuario.Id,
            usuario.Nome,
            usuario.Email,
            usuario.Cpf,
            usuario.Telefone,
            usuario.Senha
        );
    }

    public static UsuarioDetailsDto ToDetailsDto(this Usuario usuario)
    {
        return new UsuarioDetailsDto(
            usuario.Id,
            usuario.Nome,
            usuario.Email,
            usuario.Cpf,
            usuario.Telefone,
            usuario.Senha
        );
    }

    public static Usuario ToEntity(this CreateUsuarioDto dto)
    {
        return new Usuario
        {
            Nome = dto.Nome,
            Email = dto.Email,
            Cpf = dto.Cpf,
            Telefone = dto.Telefone,
            Senha = dto.Senha,
        };
    }

    public static Usuario UpdateEntity(this Usuario existingUsuario, UpdateUsuarioDto dto)
    {
        existingUsuario.Nome = dto.Nome;
        existingUsuario.Email = dto.Email;
        existingUsuario.Cpf = dto.Cpf;
        existingUsuario.Telefone = dto.Telefone;
        existingUsuario.Senha = dto.Senha;
        return existingUsuario;
    }
}
