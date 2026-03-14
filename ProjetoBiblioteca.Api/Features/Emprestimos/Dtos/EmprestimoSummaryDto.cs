public record EmprestimoSummaryDto
(
    int Id,
    int UsuariosId,
    int LivrosId,
    DateTime DataEmprestimo,
    DateTime DataDevolucaoPrevista,
    DateTime? DataDevolucaoReal
);