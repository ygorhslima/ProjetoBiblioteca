namespace ProjetoBiblioteca.Api.Features.Usuarios.Dtos;

public record UsuarioDetailsDto(
    int Id,
    string Nome,
    string Email,
    string Cpf,
    string Telefone,
    string Senha
);