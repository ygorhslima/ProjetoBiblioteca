using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoBiblioteca.Api.Models;

public class Emprestimos
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int UsuariosId { get; set; }

    [ForeignKey("UsuarioId")]
    public Usuarios usuarios;

    [Required]
    public int LivrosId { get; set; }

    [ForeignKey("LivroId")]
    public Livro livro;

    [Required]
    public DateTime DataEmprestimo { get; set; } = DateTime.Now;

    [Required]
    public DateTime DataDevolucaoPrevista { get; set; }

    public DateTime? DataDevolucaoReal { get; set; }

    Area Area { get; set; }
}
