using System;
using ProjetoBiblioteca.Api.Features.Usuarios.Dtos;

namespace ProjetoBiblioteca.Api.Features.Usuarios;

public interface IUsuarioService
{
    Task<IEnumerable<UsuarioSummaryDto>> GetAllUsuariosAsync();
    Task<UsuarioDetailsDto> GetUsuarioByIdAsync(int id);
    Task<UsuarioDetailsDto> CreateUsuarioAsync(CreateUsuarioDto dto);
    Task<bool> UpdateUsuarioAsync(int id, UpdateUsuarioDto dto);
    Task<bool> DeleteUsuarioAsync(int id);
}
