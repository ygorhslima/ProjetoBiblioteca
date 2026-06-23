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
        public static void MigrateDb(this WebApplication app)
        {
            using var scope = app.Services.CreateScope();
            var dbContext = scope.ServiceProvider.GetRequiredService<BibliotecaContext>();
            dbContext.Database.Migrate();
        }

        public static void AddBibliotecaDb(this WebApplicationBuilder builder)
        {
            var connString = builder.Configuration.GetConnectionString("Biblioteca");

            builder.Services.AddDbContext<BibliotecaContext>(options =>
                options.UseNpgsql(connString)
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