using System;
using ProjetoBiblioteca.Api.Features.Emprestimos.Dtos;

namespace ProjetoBiblioteca.Api.Features.Emprestimos;

public interface IEmprestimoService
{
    Task<IEnumerable<EmprestimoSummaryDto>> GetAllEmprestimosAsync();
    Task<EmprestimosDetailsDto> GetEmprestimosByIdAsync(int Id);
    Task<EmprestimosDetailsDto> CreateEmprestimoAsync(CreateEmprestimoDto dto);
    Task<bool> UpdateEmprestimoAsync(int Id, UpdateEmprestimoDto dto);
    Task<bool> DeleteEmprestimoAsync(int Id);
}
