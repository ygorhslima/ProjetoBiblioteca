using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Data
{
    public class BibliotecaContext(DbContextOptions<BibliotecaContext> options) : DbContext(options)
    {
        public DbSet<Livro> livros => Set<Livro>();
        public DbSet<Area> areas => Set<Area>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Lista de 30 livros (10 anteriores + 20 novos)
            modelBuilder.Entity<Livro>().HasData(
                new { Codigo = 1, Titulo = "Duna", Autor = "Frank Herbert", AreaId = 1, Ano = 1965, Editora = "Aleph", ImagemUrl = "" },
                new { Codigo = 2, Titulo = "O Hobbit", Autor = "J.R.R. Tolkien", AreaId = 2, Ano = 1937, Editora = "HarperCollins", ImagemUrl = "" },
                new { Codigo = 3, Titulo = "Fundação", Autor = "Isaac Asimov", AreaId = 1, Ano = 1951, Editora = "Aleph", ImagemUrl = "" },
                new { Codigo = 4, Titulo = "O Iluminado", Autor = "Stephen King", AreaId = 3, Ano = 1977, Editora = "Suma", ImagemUrl = "" },
                new { Codigo = 5, Titulo = "O Senhor dos Anéis", Autor = "J.R.R. Tolkien", AreaId = 2, Ano = 1954, Editora = "Martins Fontes", ImagemUrl = "" },
                new { Codigo = 6, Titulo = "Neuromancer", Autor = "William Gibson", AreaId = 1, Ano = 1984, Editora = "Aleph", ImagemUrl = "" },
                new { Codigo = 7, Titulo = "It: A Coisa", Autor = "Stephen King", AreaId = 3, Ano = 1986, Editora = "Suma", ImagemUrl = "" },
                new { Codigo = 8, Titulo = "Harry Potter e a Pedra Filosofal", Autor = "J.K. Rowling", AreaId = 2, Ano = 1997, Editora = "Rocco", ImagemUrl = "" },
                new { Codigo = 9, Titulo = "Pai Rico, Pai Pobre", Autor = "Robert Kiyosaki", AreaId = 4, Ano = 1997, Editora = "Alta Books", ImagemUrl = "" },
                new { Codigo = 10, Titulo = "O Nome do Vento", Autor = "Patrick Rothfuss", AreaId = 2, Ano = 2007, Editora = "Arqueiro", ImagemUrl = "" },

                // --- MAIS 20 LIVROS ---
                new { Codigo = 11, Titulo = "1984", Autor = "George Orwell", AreaId = 1, Ano = 1949, Editora = "Companhia das Letras", ImagemUrl = "" },
                new { Codigo = 12, Titulo = "Admirável Mundo Novo", Autor = "Aldous Huxley", AreaId = 1, Ano = 1932, Editora = "Biblioteca Azul", ImagemUrl = "" },
                new { Codigo = 13, Titulo = "O Chamado de Cthulhu", Autor = "H.P. Lovecraft", AreaId = 3, Ano = 1928, Editora = "DarkSide", ImagemUrl = "" },
                new { Codigo = 14, Titulo = "Frankenstein", Autor = "Mary Shelley", AreaId = 3, Ano = 1818, Editora = "Zahar", ImagemUrl = "" },
                new { Codigo = 15, Titulo = "Drácula", Autor = "Bram Stoker", AreaId = 3, Ano = 1897, Editora = "DarkSide", ImagemUrl = "" },
                new { Codigo = 16, Titulo = "O Código Da Vinci", Autor = "Dan Brown", AreaId = 6, Ano = 2003, Editora = "Arqueiro", ImagemUrl = "" },
                new { Codigo = 17, Titulo = "Sherlock Holmes: Um Estudo em Vermelho", Autor = "Arthur Conan Doyle", AreaId = 6, Ano = 1887, Editora = "Zahar", ImagemUrl = "" },
                new { Codigo = 18, Titulo = "E Não Sobrou Nenhum", Autor = "Agatha Christie", AreaId = 6, Ano = 1939, Editora = "Globo Livros", ImagemUrl = "" },
                new { Codigo = 19, Titulo = "O Silmarillion", Autor = "J.R.R. Tolkien", AreaId = 2, Ano = 1977, Editora = "HarperCollins", ImagemUrl = "" },
                new { Codigo = 20, Titulo = "Crônicas de Nárnia", Autor = "C.S. Lewis", AreaId = 2, Ano = 1950, Editora = "Martins Fontes", ImagemUrl = "" },
                new { Codigo = 21, Titulo = "O Guia do Mochileiro das Galáxias", Autor = "Douglas Adams", AreaId = 1, Ano = 1979, Editora = "Arqueiro", ImagemUrl = "" },
                new { Codigo = 22, Titulo = "Eu, Robô", Autor = "Isaac Asimov", AreaId = 1, Ano = 1950, Editora = "Aleph", ImagemUrl = "" },
                new { Codigo = 23, Titulo = "A Guerra dos Mundos", Autor = "H.G. Wells", AreaId = 1, Ano = 1898, Editora = "Suma", ImagemUrl = "" },
                new { Codigo = 24, Titulo = "O Alquimista", Autor = "Paulo Coelho", AreaId = 4, Ano = 1988, Editora = "Paralela", ImagemUrl = "" },
                new { Codigo = 25, Titulo = "Hábitos Atômicos", Autor = "James Clear", AreaId = 4, Ano = 2018, Editora = "Alta Life", ImagemUrl = "" },
                new { Codigo = 26, Titulo = "Dom Casmurro", Autor = "Machado de Assis", AreaId = 5, Ano = 1899, Editora = "Principis", ImagemUrl = "" },
                new { Codigo = 27, Titulo = "Grande Sertão: Veredas", Autor = "Guimarães Rosa", AreaId = 5, Ano = 1956, Editora = "Companhia das Letras", ImagemUrl = "" },
                new { Codigo = 28, Titulo = "O Retrato de Dorian Gray", Autor = "Oscar Wilde", AreaId = 5, Ano = 1890, Editora = "Pandorga", ImagemUrl = "" },
                new { Codigo = 29, Titulo = "Cem Anos de Solidão", Autor = "Gabriel García Márquez", AreaId = 5, Ano = 1967, Editora = "Record", ImagemUrl = "" },
                new { Codigo = 30, Titulo = "O Corvo", Autor = "Edgar Allan Poe", AreaId = 3, Ano = 1845, Editora = "DarkSide", ImagemUrl = "" }
            );
        }
    }
}