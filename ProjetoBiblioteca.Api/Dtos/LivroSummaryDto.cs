namespace ProjetoBiblioteca.Api.Dtos;

public record LivroSummaryDto(
    int Codigo,
    string Titulo,
    string Autor,
    string Area,
    int Ano,
    string Editora
);
