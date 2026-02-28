using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjetoBiblioteca.Api.Dtos;
using ProjetoBiblioteca.Api.Models;

namespace ProjetoBiblioteca.Api.Mapping
{
    public static class AreasMapping
    {
        public static AreaSummaryDto ToSummaryDto(this Area area) => new(area.Id, area.Nome);
    }
}