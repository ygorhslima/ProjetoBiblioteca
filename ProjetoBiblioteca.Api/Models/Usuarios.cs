using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ProjetoBiblioteca.Api.Models;

public class Usuarios
{
    [Key]
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
