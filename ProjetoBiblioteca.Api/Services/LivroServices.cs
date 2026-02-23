using System;
using Microsoft.EntityFrameworkCore;
using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Dtos;
using ProjetoBiblioteca.Api.Mapping;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Services;

public class LivroServices(BibliotecaContext dbContext) : ILivroService
{
    public async Task<IEnumerable<LivroSummaryDto>> GetAllLivrosAsync()
    {
        return await dbContext.livros
        .Include(l => l.Area)
        .Select(l => l.ToSummaryDto())
        .AsNoTracking()
        .ToListAsync();
    }

    public async Task<LivrosDetailsDto> GetLivrosByCodigoAsync(int codigo)
    {
        var livro = await dbContext.livros.Include(l => l.Area).FirstOrDefaultAsync(l => l.Codigo == codigo);
        return livro.ToDetailsDto();
    }

    public async Task<LivrosDetailsDto> CreateLivroAsync(CreateLivroDto dto)
    {
        var livro = dto.ToEntity();
        dbContext.livros.Add(livro);
        await dbContext.SaveChangesAsync();
        return livro.ToDetailsDto();
    }

    public async Task<bool> DeleteLivroAsync(int codigo)
    {
        var rowsAffected = await dbContext.livros.Where(l => l.Codigo == codigo).ExecuteDeleteAsync();
        return rowsAffected > 0;
    }

    public async Task<bool> UpdateLivroAsync(int codigo, UpdateLivroDto dto)
    {
        var existingLivro = await dbContext.livros.FindAsync(codigo);
        if (existingLivro is null) return false;
        existingLivro.UpdateEntity(dto);
        await dbContext.SaveChangesAsync();        
        return true;
    }
}
