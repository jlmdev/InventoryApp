using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace InventoryApp.Migrations
{
    public partial class CreateServer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Servers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(nullable: false),
                    Serial = table.Column<string>(nullable: true),
                    DateAcquired = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Processor = table.Column<string>(nullable: true),
                    OS = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: false),
                    IP = table.Column<string>(nullable: true),
                    Subnet = table.Column<string>(nullable: true),
                    Gateway = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Servers", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Servers");
        }
    }
}
