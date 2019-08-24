using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CsCrmApi.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    EventId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EventType = table.Column<string>(maxLength: 50, nullable: true),
                    Description = table.Column<string>(maxLength: 250, nullable: true),
                    Schedule = table.Column<string>(maxLength: 250, nullable: true),
                    StartDate = table.Column<DateTime>(maxLength: 20, nullable: true),
                    EndDate = table.Column<DateTime>(maxLength: 20, nullable: true),
                    StartTime = table.Column<string>(maxLength: 20, nullable: true),
                    EndTime = table.Column<string>(maxLength: 20, nullable: true),
                    Location = table.Column<string>(maxLength: 100, nullable: true),
                    Capacity = table.Column<string>(maxLength: 20, nullable: true),
                    numAttending = table.Column<string>(maxLength: 20, nullable: true),
                    IsDeleted = table.Column<bool>(maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.EventId);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    StudentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(maxLength: 25, nullable: true),
                    MiddleName = table.Column<string>(maxLength: 15, nullable: true),
                    LastName = table.Column<string>(maxLength: 25, nullable: true),
                    BirthDate = table.Column<DateTime>(maxLength: 20, nullable: true),
                    SchoolYear = table.Column<string>(maxLength: 20, nullable: true),
                    Status = table.Column<string>(maxLength: 30, nullable: true),
                    Address = table.Column<string>(maxLength: 50, nullable: true),
                    City = table.Column<string>(maxLength: 25, nullable: true),
                    State = table.Column<string>(maxLength: 25, nullable: true),
                    ZipCode = table.Column<string>(maxLength: 20, nullable: true),
                    Email = table.Column<string>(maxLength: 50, nullable: true),
                    Phone = table.Column<string>(maxLength: 30, nullable: true),
                    password = table.Column<string>(maxLength: 25, nullable: true),
                    IsDeleted = table.Column<bool>(maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.StudentId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(maxLength: 25, nullable: true),
                    MiddleName = table.Column<string>(maxLength: 15, nullable: true),
                    LastName = table.Column<string>(maxLength: 25, nullable: true),
                    Role = table.Column<string>(maxLength: 25, nullable: true),
                    BirthDate = table.Column<DateTime>(maxLength: 20, nullable: true),
                    Address = table.Column<string>(maxLength: 50, nullable: true),
                    City = table.Column<string>(maxLength: 25, nullable: true),
                    State = table.Column<string>(maxLength: 25, nullable: true),
                    ZipCode = table.Column<string>(maxLength: 20, nullable: true),
                    Email = table.Column<string>(maxLength: 50, nullable: true),
                    Phone = table.Column<string>(maxLength: 30, nullable: true),
                    Password = table.Column<string>(maxLength: 25, nullable: true),
                    IsDeleted = table.Column<bool>(maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
