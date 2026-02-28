using System;
using ProjetoBiblioteca.Api.Dtos;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Mapping;

public static class LivrosMapping
{
    // Converte a Entidade do Banco para o DTO de resumo (Lista)
    public static LivroSummaryDto ToSummaryDto(this Livro livro)
    {
        return new LivroSummaryDto(
            livro.Codigo,
            livro.Titulo,
            livro.Autor,
            livro.Area!.Nome,
            livro.Ano,
            livro.Editora,
            livro.ImagemUrl
        );
    }

    // Converte a Entidade do Banco para o DTO de detalhes (ID único)
    public static LivrosDetailsDto ToDetailsDto(this Livro livro)
    {
        return new LivrosDetailsDto(
            livro.Codigo,
            livro.Titulo,
            livro.Autor,
            livro.AreaId,
            livro.Ano,
            livro.Editora,
            livro.ImagemUrl
        );
    }

    public static Livro ToEntity(this CreateLivroDto dto)
    {
        return new Livro
        {
            Titulo = dto.Titulo,
            Autor = dto.Autor,
            AreaId = dto.AreaId,
            Ano = dto.Ano,
            Editora = dto.Editora,
            ImagemUrl = dto.ImagemUrl
        };
    }

    public static Livro UpdateEntity(this Livro existingLivro, UpdateLivroDto dto)
    {
        existingLivro.Titulo = dto.Titulo;
        existingLivro.Autor = dto.Autor;
        existingLivro.AreaId = dto.AreaId;
        existingLivro.Ano = dto.Ano;
        existingLivro.Editora = dto.Editora;
        existingLivro.ImagemUrl = dto.ImagemUrl;
        return existingLivro;
    }
}
