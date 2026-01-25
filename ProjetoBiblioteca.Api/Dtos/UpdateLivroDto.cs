using System.ComponentModel.DataAnnotations;

namespace ProjetoBiblioteca.Api.Dtos;

public record UpdateLivroDto
(
    [Required] string Titulo,
    [Required] string Autor,
    [Required] string Area,
    [Required] int Ano,
    [Required] string Editora
);