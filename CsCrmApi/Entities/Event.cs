using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace CsCrmApi.Entities
{
    public class Event
    {
        [Key]
		[DatabaseGenerated (DatabaseGeneratedOption.Identity)]
        public int EventId { get; set; }
        [MaxLength (50)]
        public string EventType { get; set; }
        [MaxLength (250)]
        public string Description { get; set; }
        [MaxLength (250)]
        public string Schedule { get; set; }
        [MaxLength (20)]
        public DateTime? StartDate { get; set; }
        [MaxLength (20)]
        public DateTime? EndDate { get; set; }
        [MaxLength (20)]
        public string StartTime { get; set; }
        [MaxLength (20)]
        public string EndTime { get; set; }
        [MaxLength (100)]
        public string Location { get; set; }
        [MaxLength (20)]
        public string Capacity { get; set; }
        [MaxLength (20)]
        public string numAttending { get; set; }
        [MaxLength (10)]
        public bool IsDeleted { get; set; }
    }
}