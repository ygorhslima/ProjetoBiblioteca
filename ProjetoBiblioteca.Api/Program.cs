

using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Endpoints;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddValidation();

builder.AddBibliotecaDb();

var app = builder.Build();

app.MigrateDb();
app.MapLivrosEndpoints();
app.Run();
