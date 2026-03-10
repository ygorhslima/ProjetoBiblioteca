

using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Endpoints;
using ProjetoBiblioteca.Api.Features.Usuarios;
using ProjetoBiblioteca.Api.Services;

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
// porque addScoped? Porque o seu service usa o DbContext. O ciclo de vida "Scoped" garante que o banco de dados seja aberto e fechado corretamente a cada requisição HTTP, evitando vazamento de memória ou conexões presas
builder.Services.AddScoped<ILivroService, LivroServices>();
builder.Services.AddScoped<IUsuarioService, UsuarioServices>();
var app = builder.Build();

app.UseCors(myAllowSpecificOrigins);
app.MigrateDb();

//--------- endpoint --------------
app.MapLivrosEndpoints();
app.MapAreasEndpoints();
app.MapUsuariosEndpoint();
// -----------------------

app.Run();