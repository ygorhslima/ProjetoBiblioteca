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
    }
}