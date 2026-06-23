using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoBiblioteca.Api.Models;

public class Livro
{
    [Key]
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Codigo { get; set; }

    [Required(ErrorMessage = "Título é obrigatório")]
    [StringLength(200, MinimumLength = 2)]
    public string Titulo { get; set; }

    [Required]
    [StringLength(150)]
    public string Autor { get; set; }

    [Required]
    [Range(1, int.MaxValue)]
    public int AreaId { get; set; }

    public Area Area { get; set; } // Propriedade de navegação — sem annotations

    [Required]
    [Range(1000, 2100, ErrorMessage = "Ano inválido")]
    public int Ano { get; set; }

    [Required(AllowEmptyStrings = false)]
    [StringLength(100)]
    public string Editora { get; set; }

    [Url]
    [StringLength(500)]
    public string? ImagemUrl { get; set; }
}