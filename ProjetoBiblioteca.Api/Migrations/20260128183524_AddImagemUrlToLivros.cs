using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoBiblioteca.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddImagemUrlToLivros : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImagemUrl",
                table: "livros",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImagemUrl",
                table: "livros");
        }
    }
}
