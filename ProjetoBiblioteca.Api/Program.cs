using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Endpoints;
using ProjetoBiblioteca.Api.Features.Emprestimos;
using ProjetoBiblioteca.Api.Features.Usuarios;
using ProjetoBiblioteca.Api.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

var myAllowSpecificOrigins = "_myAllowSpecificOrigins";

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

builder.Services.AddScoped<AuthService>();
builder.Services.AddScoped<ILivroService, LivroServices>();
builder.Services.AddScoped<IUsuarioService, UsuarioServices>();
builder.Services.AddScoped<IEmprestimoService, EmprestimoServices>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer           = true,
            ValidateAudience         = true,
            ValidateLifetime         = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer              = builder.Configuration["Jwt:Issuer"],
            ValidAudience            = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey         = new SymmetricSecurityKey(
                                           Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
        };
    });

builder.Services.AddAuthorization();

var app = builder.Build();
app.UseCors(myAllowSpecificOrigins);
app.UseAuthentication();
app.UseAuthorization();

app.MigrateDb();
app.MapLivrosEndpoints();
app.MapAreasEndpoints();
app.MapUsuariosEndpoint();
app.MapEmprestimosEndpoints();

app.Run();