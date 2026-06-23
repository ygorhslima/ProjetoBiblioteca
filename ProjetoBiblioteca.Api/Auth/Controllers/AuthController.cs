using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjetoBiblioteca.Api.Auth.Dto;
using ProjetoBiblioteca.Api.Services;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AuthService _authService;
    public AuthController(AuthService authService)
    {
        _authService = authService;
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto)
    {
        var resultado = await _authService.LoginAsync(dto);
        if (resultado == null)
        {
            return Unauthorized(new { mensagem = "Email ou senha Inválidos." });
        }
        return Ok(resultado);
    }
    
    // Rota acessível para qualquer usuário autenticado
    [Authorize]
    [HttpGet("perfil")]
    public IActionResult Perfil()
    {
        var id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var nome = User.FindFirst(ClaimTypes.Name)?.Value;
        var email = User.FindFirst(ClaimTypes.Email)?.Value;
        var nivel = User.FindFirst(ClaimTypes.Role)?.Value;
        return Ok(new { id, nome, email, nivel });
    }

    // Apenas Bibliotecário e Admin
    [Authorize(Roles = "Bibliotecario,Admin")]
    [HttpGet("area-bibliotecario")]
    public IActionResult AreaBibliotecario()
    {
        return Ok(new { mensagem = "Acesso de Bibliotecário confirmado!" });
    }


    // Apenas Admin
    [Authorize(Roles = "Admin")]
    [HttpGet("area-admin")]
    public IActionResult AreaAdmin()
    {
        return Ok(new { mensagem = "Acesso Administrativo confirmado!" });
    }
}