using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Data
{
    public static class DataExtensions
    {
        public static void MigrateDb(this WebApplication app) /* permite que você chame essa função lá no seu arquivo `Program.cs` simplesmente digitando `app.MigrateDb();`. Isso deixa o código principal mais limpo.*/
        {
            /*
                No ASP.NET, os serviços (como a conexão com o banco) têm um tempo de vida. Você não quer deixar a conexão com o banco aberta para sempre.

                * O **Scope** cria uma "caixa temporária". Tudo o que for criado ali dentro será destruído e a memória será liberada assim que a função terminar (por causa da palavra-chave `using`)
            */
            using var scope = app.Services.CreateScope();
            var dbContext = scope.ServiceProvider.GetRequiredService<BibliotecaContext>();
            /*
                1. Verifica quais tabelas já existem no banco.
                2. Verifica se você criou tabelas novas no código.
                3. **Cria ou atualiza as tabelas automaticamente** assim que o projeto inicia.
            */
            dbContext.Database.Migrate();
        }

        public static void AddBibliotecaDb(this WebApplicationBuilder builder)
        {
            // definindo a string de conexão para se conectar ao MySQL
            var connString = builder.Configuration.GetConnectionString("Biblioteca");

            // detectar automaticamente a versão do servidor MySQL
            var serverVersion = ServerVersion.AutoDetect(connString);

            // 3. Configura o contexto do banco de dados
            builder.Services.AddDbContext<BibliotecaContext>(options =>
                options.UseMySql(connString, serverVersion)
                .UseSeeding((context, _) =>
                {
                    if (!context.Set<Area>().Any())
                    {
                        context.Set<Area>().AddRange(
                            new Area { Nome = "Ficção Científica" },
                            new Area { Nome = "Fantasia" },
                            new Area { Nome = "Biografia" },
                            new Area { Nome = "História" },
                            new Area { Nome = "Tecnologia" },
                            new Area { Nome = "Suspense" }
                        );
                        context.SaveChanges();
                    }
                })
                );
        }

    }
}