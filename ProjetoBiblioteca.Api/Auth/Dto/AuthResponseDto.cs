namespace ProjetoBiblioteca.Api.Auth.Dto;

public record AuthResponseDto(
    string Token,
    string Nome,
    string Email,
    string NivelAcesso,
    DateTime ExpiresAt
);