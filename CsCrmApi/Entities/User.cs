using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CsCrmApi.Entities
{
    public class User
    {
        [Key]
		[DatabaseGenerated (DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        [MaxLength (25)]
        public string FirstName { get; set; }
        [MaxLength (15)]
        public string MiddleName { get; set; }
        [MaxLength (25)]
        public string LastName { get; set; }
        [MaxLength (25)]
        public string Role { get; set; }
        
        [MaxLength (50)]
        public string Email { get; set; }
        [MaxLength (30)]
        public string Phone { get; set; }
        [MaxLength (25)]
        public string Password { get; set; }
        [MaxLength (10)]
        public bool? IsDeleted { get; set; }
    }
}