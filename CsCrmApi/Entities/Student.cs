using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace CsCrmApi.Entities
{
    public class Student
    {
        [Key]
		[DatabaseGenerated (DatabaseGeneratedOption.Identity)]
        public int StudentId { get; set; }
        [MaxLength (25)]
        public string FirstName { get; set; }
        [MaxLength (15)]
        public string MiddleName { get; set; }
        [MaxLength (25)]
        public string LastName { get; set; }
        [MaxLength (20)]
        public DateTime? BirthDate { get; set; }
        [MaxLength (20)]
        public string SchoolYear { get; set; }
        [MaxLength (30)]
        public string Status { get; set; }
        [MaxLength (50)]
        public string Address { get; set; }
        [MaxLength (25)]
        public string City { get; set; }
        [MaxLength (25)]
        public string State { get; set; }
        [MaxLength (20)]
        public string ZipCode { get; set; }
        [MaxLength (50)]
        public string Email { get; set; }
        [MaxLength (30)]
        public string Phone { get; set; }
        [MaxLength (25)]
        public string password { get; set; }
        [MaxLength (10)]
        public bool IsDeleted { get; set; }
    }
}