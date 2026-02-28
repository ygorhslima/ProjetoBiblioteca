using System;
using Microsoft.EntityFrameworkCore;
using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Features.Usuarios.Dtos;

namespace ProjetoBiblioteca.Api.Features.Usuarios;

public class UsuarioServices(BibliotecaContext dbContext) : IUsuarioService
{
    public async Task<IEnumerable<UsuarioSummaryDto>> GetAllUsuariosAsync()
    {
        return await dbContext.usuarios
        .Select(u => u.ToSummaryDto())
        .AsNoTracking()
        .ToListAsync();
    }

    public async Task<UsuarioDetailsDto> GetUsuarioByIdAsync(int id)
    {
        var usuario = await dbContext.usuarios
        .FirstOrDefaultAsync(u => u.Id == id);
        return usuario.ToDetailsDto();
    }
    
    public async Task<UsuarioDetailsDto> CreateUsuarioAsync(CreateUsuarioDto dto)
    {
        var usuario = dto.ToEntity();
        dbContext.usuarios.Add(usuario);
        await dbContext.SaveChangesAsync();
        return usuario.ToDetailsDto();
    }

    public async Task<bool> DeleteUsuarioAsync(int id)
    {
        var rowsAffected = await dbContext.usuarios.Where(u => u.Id == id).ExecuteDeleteAsync();
        return rowsAffected > 0;
    }



    public async Task<bool> UpdateUsuarioAsync(int id, UpdateUsuarioDto dto)
    {
        var existingUsuario = await dbContext.usuarios.FindAsync(id);
        if(existingUsuario is null) return false;
        existingUsuario.UpdateEntity(dto);
        await dbContext.SaveChangesAsync();
        return true;
    }
}
