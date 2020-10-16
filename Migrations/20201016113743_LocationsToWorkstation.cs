using Microsoft.EntityFrameworkCore.Migrations;

namespace InventoryApp.Migrations
{
    public partial class LocationsToWorkstation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LocationId",
                table: "Workstations",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Workstations_LocationId",
                table: "Workstations",
                column: "LocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Workstations_Locations_LocationId",
                table: "Workstations",
                column: "LocationId",
                principalTable: "Locations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Workstations_Locations_LocationId",
                table: "Workstations");

            migrationBuilder.DropIndex(
                name: "IX_Workstations_LocationId",
                table: "Workstations");

            migrationBuilder.DropColumn(
                name: "LocationId",
                table: "Workstations");
        }
    }
}
