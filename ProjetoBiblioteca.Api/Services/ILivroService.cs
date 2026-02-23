using System;
using ProjetoBiblioteca.Api.Dtos;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Services;

public interface ILivroService
{
    Task<IEnumerable<LivroSummaryDto>> GetAllLivrosAsync();
    Task<LivrosDetailsDto> GetLivrosByCodigoAsync(int codigo);
    Task<LivrosDetailsDto> CreateLivroAsync(CreateLivroDto dto);
    Task<bool> UpdateLivroAsync(int codigo, UpdateLivroDto dto);
    Task<bool> DeleteLivroAsync(int codigo);
}
