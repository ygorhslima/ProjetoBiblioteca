

using ProjetoBiblioteca.Api.Endpoints;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddValidation();

var app = builder.Build();
app.MapLivrosEndpoints();
app.Run();
