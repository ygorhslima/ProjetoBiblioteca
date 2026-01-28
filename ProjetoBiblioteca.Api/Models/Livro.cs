using System;
using System.ComponentModel.DataAnnotations;

namespace ProjetoBiblioteca.Api.Models;

public class Livro
{
    [Key] public int Codigo {get;set;}
    public string Titulo {get;set;}
    public string Autor {get;set;}
    public int AreaId {get;set;}
    public Area Area {get;set;}
    public int Ano {get;set;}
    public string Editora {get;set;}
    public string ImagemUrl {get; set;}
}
