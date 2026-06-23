using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ProjetoBiblioteca.Api.Auth.Dto;
using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Services;

public class AuthService(BibliotecaContext db, IConfiguration config)
{
    private readonly BibliotecaContext _db = db;
    private readonly IConfiguration _config = config;

    public async Task<AuthResponseDto?> LoginAsync(LoginDto dto)
    {
        // 1. busca usuário pelo email
        var usuario = await _db.usuarios.FirstOrDefaultAsync(u => u.Email == dto.Email);
        if (usuario == null) return null;

        // 2. Verifica a senha (se usar BCrypt troque para BCrypt.Verify)
        if (usuario.Senha != dto.Senha) return null;

        return GerarToken(usuario);
    }

    private AuthResponseDto GerarToken(Usuario usuario)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var expiracao = DateTime.UtcNow.AddHours(8);
        var nivelNome = ((NivelAcessoEnum)usuario.NivelAcesso).ToString();
       
        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, usuario.Id.ToString()),
            new Claim(ClaimTypes.Name,           usuario.Nome),
            new Claim(ClaimTypes.Email,          usuario.Email),
            new Claim(ClaimTypes.Role,           nivelNome),
            new Claim("NivelAcesso",             usuario.NivelAcesso.ToString()),
            new Claim("Cpf",                     usuario.Cpf)
        };

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: expiracao,
            signingCredentials: credentials
        );

        return new AuthResponseDto(
            Token: new JwtSecurityTokenHandler().WriteToken(token),
            Nome: usuario.Nome,
            Email: usuario.Email,
            NivelAcesso: nivelNome,
            ExpiresAt: expiracao
        );
    }
}