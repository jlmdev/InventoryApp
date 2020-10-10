using Microsoft.EntityFrameworkCore.Migrations;

namespace InventoryApp.Migrations
{
    public partial class RemoveActiveBoolen : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Active",
                table: "Workstations");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Active",
                table: "Workstations",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }
    }
}
