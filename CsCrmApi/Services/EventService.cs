using System.Collections.Generic;
using System.Linq;
using CsCrmApi.Context;
using CsCrmApi.Entities;
namespace CsCrmApi.Services
{
    public class EventService
    {
        public readonly CsCrmDbContext _context;
        public EventService(CsCrmDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Event> GetEventList()
        {
            return _context.Events.ToList();
        }
        public Event GetEventById(int EventId)
        {
            return _context.Events.FirstOrDefault(u => u.EventId == EventId);
        }
        public Event SaveEvent(Event Event)
        {
            if (Event.EventId == 0)
            {
                _context.Events.Add(Event);
            }
            else
            {
                _context.Events.Update(Event);
            }
            _context.SaveChanges();
            return Event;
        }
        public Event UpdateEvent(Event selectedEvent)
        {
            _context.Events.Update(selectedEvent);
            _context.SaveChanges();
            return selectedEvent;
        }
        public string DeleteEvent(int EventId)
        {
            var EventToDelete = _context.Events.Find(EventId);
            _context.Events.Remove(EventToDelete);
            _context.SaveChanges();
            return $"Event {{EventId}} is Removed";
        }
        public string RemoveEvent(int EventId)
        {
            var EventToRemove = _context.Events.Find(EventId);
            EventToRemove.IsDeleted = true;
            _context.Events.Update(EventToRemove);
            _context.SaveChanges();
            return $"Event {{EventId}} is Deleted";
        }
    }
}