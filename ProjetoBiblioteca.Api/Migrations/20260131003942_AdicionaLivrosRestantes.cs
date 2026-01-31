using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ProjetoBiblioteca.Api.Migrations
{
    /// <inheritdoc />
    public partial class AdicionaLivrosRestantes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "livros",
                columns: new[] { "Codigo", "Ano", "AreaId", "Autor", "Editora", "ImagemUrl", "Titulo" },
                values: new object[,]
                {
                    { 1, 1965, 1, "Frank Herbert", "Aleph", "", "Duna" },
                    { 2, 1937, 2, "J.R.R. Tolkien", "HarperCollins", "", "O Hobbit" },
                    { 3, 1951, 1, "Isaac Asimov", "Aleph", "", "Fundação" },
                    { 4, 1977, 3, "Stephen King", "Suma", "", "O Iluminado" },
                    { 5, 1954, 2, "J.R.R. Tolkien", "Martins Fontes", "", "O Senhor dos Anéis" },
                    { 6, 1984, 1, "William Gibson", "Aleph", "", "Neuromancer" },
                    { 7, 1986, 3, "Stephen King", "Suma", "", "It: A Coisa" },
                    { 8, 1997, 2, "J.K. Rowling", "Rocco", "", "Harry Potter e a Pedra Filosofal" },
                    { 9, 1997, 4, "Robert Kiyosaki", "Alta Books", "", "Pai Rico, Pai Pobre" },
                    { 10, 2007, 2, "Patrick Rothfuss", "Arqueiro", "", "O Nome do Vento" },
                    { 11, 1949, 1, "George Orwell", "Companhia das Letras", "", "1984" },
                    { 12, 1932, 1, "Aldous Huxley", "Biblioteca Azul", "", "Admirável Mundo Novo" },
                    { 13, 1928, 3, "H.P. Lovecraft", "DarkSide", "", "O Chamado de Cthulhu" },
                    { 14, 1818, 3, "Mary Shelley", "Zahar", "", "Frankenstein" },
                    { 15, 1897, 3, "Bram Stoker", "DarkSide", "", "Drácula" },
                    { 16, 2003, 6, "Dan Brown", "Arqueiro", "", "O Código Da Vinci" },
                    { 17, 1887, 6, "Arthur Conan Doyle", "Zahar", "", "Sherlock Holmes: Um Estudo em Vermelho" },
                    { 18, 1939, 6, "Agatha Christie", "Globo Livros", "", "E Não Sobrou Nenhum" },
                    { 19, 1977, 2, "J.R.R. Tolkien", "HarperCollins", "", "O Silmarillion" },
                    { 20, 1950, 2, "C.S. Lewis", "Martins Fontes", "", "Crônicas de Nárnia" },
                    { 21, 1979, 1, "Douglas Adams", "Arqueiro", "", "O Guia do Mochileiro das Galáxias" },
                    { 22, 1950, 1, "Isaac Asimov", "Aleph", "", "Eu, Robô" },
                    { 23, 1898, 1, "H.G. Wells", "Suma", "", "A Guerra dos Mundos" },
                    { 24, 1988, 4, "Paulo Coelho", "Paralela", "", "O Alquimista" },
                    { 25, 2018, 4, "James Clear", "Alta Life", "", "Hábitos Atômicos" },
                    { 26, 1899, 5, "Machado de Assis", "Principis", "", "Dom Casmurro" },
                    { 27, 1956, 5, "Guimarães Rosa", "Companhia das Letras", "", "Grande Sertão: Veredas" },
                    { 28, 1890, 5, "Oscar Wilde", "Pandorga", "", "O Retrato de Dorian Gray" },
                    { 29, 1967, 5, "Gabriel García Márquez", "Record", "", "Cem Anos de Solidão" },
                    { 30, 1845, 3, "Edgar Allan Poe", "DarkSide", "", "O Corvo" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "livros",
                keyColumn: "Codigo",
                keyValue: 30);
        }
    }
}
