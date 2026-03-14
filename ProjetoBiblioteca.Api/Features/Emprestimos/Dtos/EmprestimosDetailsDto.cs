namespace ProjetoBiblioteca.Api.Features.Emprestimos.Dtos;

public record EmprestimosDetailsDto
(
    int Id,
    int UsuariosId,
    int LivrosId,
    DateTime DataEmprestimo,
    DateTime DataDevolucaoPrevista,
    DateTime? DataDevolucaoReal
);
