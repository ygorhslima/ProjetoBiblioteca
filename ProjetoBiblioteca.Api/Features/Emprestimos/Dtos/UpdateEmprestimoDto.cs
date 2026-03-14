namespace ProjetoBiblioteca.Api.Features.Emprestimos.Dtos;

public record UpdateEmprestimoDto
(
    int UsuariosId,
    int LivrosId,
    DateTime DataEmprestimo,
    DateTime DataDevolucaoPrevista,
    DateTime? DataDevolucaoReal
);
