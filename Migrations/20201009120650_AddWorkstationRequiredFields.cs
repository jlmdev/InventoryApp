using Microsoft.EntityFrameworkCore.Migrations;

namespace InventoryApp.Migrations
{
    public partial class AddWorkstationRequiredFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Workstations",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Workstations",
                type: "text",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
