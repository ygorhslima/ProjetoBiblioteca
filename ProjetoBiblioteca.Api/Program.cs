

using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Endpoints;

var builder = WebApplication.CreateBuilder(args);

// 1. Defina o nome da política
var myAllowSpecificOrigins = "_myAllowSpecificOrigins";

// 2. Adicione o serviço de CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5173")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                      });
});

builder.Services.AddValidation();
builder.AddBibliotecaDb();
var app = builder.Build();
app.UseCors(myAllowSpecificOrigins);
app.MigrateDb();
app.MapLivrosEndpoints();
app.MapAreasEndpoints();
app.Run();
