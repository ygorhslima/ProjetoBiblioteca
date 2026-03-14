using System;
using Microsoft.EntityFrameworkCore;
using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Features.Emprestimos.Dtos;

namespace ProjetoBiblioteca.Api.Features.Emprestimos;

public class EmprestimoServices(BibliotecaContext dbContext) : IEmprestimoService
{
    public async Task<IEnumerable<EmprestimoSummaryDto>> GetAllEmprestimosAsync()
    {
        return await dbContext.emprestimos
            .Select(e => e.ToSummaryDto())
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task<EmprestimosDetailsDto> GetEmprestimosByIdAsync(int Id)
    {
        return await dbContext.emprestimos
            .Where(e => e.Id == Id)
            .Select(e => e.ToDetailsDto())
            .FirstOrDefaultAsync();
    }

    public async Task<EmprestimosDetailsDto> CreateEmprestimoAsync(CreateEmprestimoDto dto)
    {
        var emprestimo = dto.ToEntity();
        dbContext.emprestimos.Add(emprestimo);
        await dbContext.SaveChangesAsync();
        return emprestimo.ToDetailsDto();
    }

    public async Task<bool> UpdateEmprestimoAsync(int Id, UpdateEmprestimoDto dto)
    {
        var existingEmprestimo = await dbContext.emprestimos.FindAsync(Id);
        if(existingEmprestimo is null) return false;
        existingEmprestimo.UpdateEntity(dto);
        await dbContext.SaveChangesAsync();
        return true; 
    }

    public async Task<bool> DeleteEmprestimoAsync(int Id)
    {
        var rowsAffected = await dbContext.emprestimos.Where(e => e.Id == Id).ExecuteDeleteAsync();
        return rowsAffected > 0;
    }

}
