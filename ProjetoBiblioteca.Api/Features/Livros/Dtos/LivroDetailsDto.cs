namespace ProjetoBiblioteca.Api.Dtos;

public record LivrosDetailsDto(
    int Codigo,
    string Titulo,
    string Autor,
    int AreaId,
    int Ano,
    string Editora,
    string ImagemUrl
);