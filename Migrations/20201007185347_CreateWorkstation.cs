using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace InventoryApp.Migrations
{
    public partial class CreateWorkstation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Workstations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(nullable: true),
                    Serial = table.Column<string>(nullable: true),
                    DateAcquired = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Processor = table.Column<string>(nullable: true),
                    OS = table.Column<string>(nullable: true),
                    Active = table.Column<bool>(nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: false),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Workstations", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Workstations");
        }
    }
}
