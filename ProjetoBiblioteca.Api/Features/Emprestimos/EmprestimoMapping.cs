using System;
using ProjetoBiblioteca.Api.Features.Emprestimos.Dtos;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Features.Emprestimos;

public static class EmprestimoMapping
{
    public static EmprestimoSummaryDto ToSummaryDto(this Emprestimo emprestimo)
    {
        return new EmprestimoSummaryDto(
            emprestimo.Id,
            emprestimo.UsuariosId,
            emprestimo.LivrosId,
            emprestimo.DataEmprestimo,
            emprestimo.DataDevolucaoPrevista,
            emprestimo.DataDevolucaoReal
        );
    }

    public static EmprestimosDetailsDto ToDetailsDto(this Emprestimo emprestimo)
    {
        return new EmprestimosDetailsDto(
            emprestimo.Id,
            emprestimo.UsuariosId,
            emprestimo.LivrosId,
            emprestimo.DataEmprestimo,
            emprestimo.DataDevolucaoPrevista,
            emprestimo.DataDevolucaoReal
        );
    }

    public static Emprestimo ToEntity(this CreateEmprestimoDto dto)
    {
        return new Emprestimo
        {
            UsuariosId = dto.UsuariosId,
            LivrosId = dto.LivrosId,
            DataEmprestimo = dto.DataEmprestimo,
            DataDevolucaoPrevista = dto.DataDevolucaoPrevista,
            DataDevolucaoReal = dto.DataDevolucaoReal
        };
    }
    public static Emprestimo UpdateEntity(this Emprestimo existingEmprestimo, UpdateEmprestimoDto dto)
    {
        existingEmprestimo.UsuariosId = dto.UsuariosId;
        existingEmprestimo.LivrosId = dto.LivrosId;
        existingEmprestimo.DataEmprestimo = dto.DataEmprestimo;
        existingEmprestimo.DataDevolucaoPrevista = dto.DataDevolucaoPrevista;
        existingEmprestimo.DataDevolucaoReal = dto.DataDevolucaoReal;
        return existingEmprestimo;
    }
}
