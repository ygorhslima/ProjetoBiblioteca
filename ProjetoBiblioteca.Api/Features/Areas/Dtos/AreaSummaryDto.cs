using System.ComponentModel.DataAnnotations;

namespace ProjetoBiblioteca.Api.Dtos;

public record AreaSummaryDto(
    [Required] int Id,
    [Required] string Nome
);
