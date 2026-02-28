using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjetoBiblioteca.Api.Data;
using ProjetoBiblioteca.Api.Dtos;
using ProjetoBiblioteca.Api.Mapping;

namespace ProjetoBiblioteca.Api.Endpoints
{
    public static class AreasEndpoint
    {
        const string GetAreasEndpoint = "GetAreas";
        public static void MapAreasEndpoints(this WebApplication app)
        {
            var group = app.MapGroup("api/area");
            group.MapGet("/", async (BibliotecaContext dbContext) =>
            await dbContext.areas
                .Select(a => a.ToSummaryDto())
                .AsNoTracking()
                .ToListAsync());
        }
    }
}