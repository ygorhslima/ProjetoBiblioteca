namespace ProjetoBiblioteca.Api.Features.Emprestimos.Dtos;

public record CreateEmprestimoDto
(
    int UsuariosId,
    int LivrosId,
    DateTime DataEmprestimo,
    DateTime DataDevolucaoPrevista,
    DateTime? DataDevolucaoReal
);
