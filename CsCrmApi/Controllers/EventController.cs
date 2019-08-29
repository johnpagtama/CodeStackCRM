using System.Collections.Generic;
using System.Linq;
using CsCrmApi.Entities;
using CsCrmApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CsCrmApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly EventService _eventService;

        public EventController(EventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        public ActionResult<List<Event>> GetEventList()
        {
            return _eventService.GetEventList().ToList();
        }

        [HttpGet ("{id}")]
		public ActionResult<Event> GetEventById (int id) 
        {
			return _eventService.GetEventById (id);
		}
        
        [HttpPost]
        public ActionResult<Event> AddEvent([FromBody] Event selectedEvent) 
        {
            return _eventService.SaveEvent(selectedEvent);
        }

        [HttpPut]
        public ActionResult<Event> UpdateEvent([FromBody] Event selectedEvent)
        {
            return _eventService.UpdateEvent(selectedEvent);
        }

        // PATCH api/user/removeevent/1
        [HttpPatch("{id}")]
        public ActionResult<string> RemoveEvent([FromQuery] int id)
        {
            return _eventService.RemoveEvent(id);
        }

        // DELETE api/user/deleteevent/1
        [HttpDelete("{id}")]
        public ActionResult<string> DeleteEvent([FromQuery] int id)
        {
            return _eventService.DeleteEvent(id);
        }
    }
}