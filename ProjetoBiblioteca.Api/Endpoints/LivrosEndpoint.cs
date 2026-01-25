using System;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Endpoints;

public static class LivrosEndpoint
{
    public static void MapLivrosEndpoints(this WebApplication app)
    {
        // rota padrão para todas as rotas
        // Simulação de banco de dados com dados pré-carregados
        var Acervo = new List<Livro>
        {
            new Livro {
                Codigo = 1,
                Titulo = "Dom Casmurro",
                Autor = "Machado de Assis",
                Area = "Literatura",
                Ano = 1899,
                Editora = "Garnier"
            },
            new Livro {
                Codigo = 2,
                Titulo = "O Alquimista",
                Autor = "Paulo Coelho",
                Area = "Ficção",
                Ano = 1988,
                Editora = "Rocco"
            },
            new Livro {
                Codigo = 3,
                Titulo = "1984",
                Autor = "George Orwell",
                Area = "Distopia",
                Ano = 1949,
                Editora = "Secker & Warburg"
            },
            new Livro {
                Codigo = 4,
                Titulo = "Modernidade Líquida",
                Autor = "Zygmunt Bauman",
                Area = "Sociologia",
                Ano = 1998,
                Editora = "fulano"
            },
            new Livro {
                Codigo = 5,
                Titulo = "Harry Potter a o Cálice de Fogo",
                Autor = "J.K Rolling",
                Area = "Ficção",
                Ano = 2000,
                Editora = "Rocco"
            },
            new Livro {
                Codigo = 6,
                Titulo = "Homem Aranha",
                Autor = "Stan Lee",
                Area = "Ficção",
                Ano = 1968,
                Editora = "Marvel"
            },
        };
        var group = app.MapGroup("/livros");

        // 1. Cadastrar (POST)
        group.MapPost("/", (Livro novoLivro) =>
        {
            Acervo.Add(novoLivro);
            return Results.Created($"/{novoLivro.Codigo}", novoLivro);
        });

        // 2. Imprimir/Listar todos (GET)
        group.MapGet("/", () => Results.Ok(Acervo));

        // 3. Pesquisar por código (GET com parâmetro)
        group.MapGet("/{codigo}", (int codigo) =>
        {
            var livro = Acervo.FirstOrDefault(l => l.Codigo == codigo);
            return livro is not null ? Results.Ok(livro) : Results.NotFound();
        });

        // 4. Modificar um livro a partir do código
        group.MapPut("/{codigo}", (int codigo, Livro livroAlterado) =>
        {
            var livroExistente = Acervo.FirstOrDefault(l => l.Codigo == codigo);

            if (livroExistente == null)
            {
                return Results.NotFound(new { message = "livro não encontrado para atualização" });
            }

            livroExistente.Titulo = livroAlterado.Titulo;
            livroExistente.Autor = livroAlterado.Autor;
            livroExistente.Area = livroAlterado.Area;
            livroExistente.Ano = livroAlterado.Ano;
            livroExistente.Editora = livroAlterado.Editora;

            return Results.Ok(livroExistente);
        });

        // 5. Deletar um livro a partir do código
        group.MapDelete("/{codigo}", (int codigo) =>
        {
            var livro = Acervo.FirstOrDefault(l => l.Codigo == codigo);
            if (livro == null)
            {
                return Results.NotFound(new { message = "livro não encontrado" });
            }
            Acervo.Remove(livro);
            return Results.NoContent();
        });

        // 4. Ordenar por ano (GET)
        group.MapGet("/livros/ordenados", () =>
        {
            var ordenados = Acervo.OrderBy(l => l.Ano).ToList();
            return Results.Ok(ordenados);
        });
    }
}
