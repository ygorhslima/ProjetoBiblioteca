using System.ComponentModel.DataAnnotations;

namespace ProjetoBiblioteca.Api.Features.Usuarios.Dtos;

public record UpdateUsuarioDto(
    [Required] string Nome,
    [Required] string Email,
    [Required] string Cpf,
    [Required] string Telefone,
    [Required] string Senha
);