using System;
namespace CsCrmApi.Entities
{
    public class Event
    {
        public int EventTypeId { get; set; }
        public string EventType { get; set; }
        public string Description { get; set; }
        public string Schedule { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string Location { get; set; }
        public string Capacity { get; set; }
        public string numAttending { get; set; }
        public bool IsDeleted { get; set; }
    }
}