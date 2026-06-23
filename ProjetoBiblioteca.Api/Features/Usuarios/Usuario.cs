using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoBiblioteca.Api.Models;

public class Usuario
{
    [Key]
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    public string Nome { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    public string Cpf { get; set; }

    [Required]
    public string Telefone { get; set; }

    [Required]
    public string Senha { get; set; }

    [Required]
    public int NivelAcesso { get; set; }

    public DateTime DataAcesso = DateTime.Now;

}
