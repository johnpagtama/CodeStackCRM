using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CsCrmApi.Entities;
using CsCrmApi.Services;
using Microsoft.AspNetCore.Mvc;
namespace CsCrmApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class EventController
    {
        private EventService eventDb;

        public EventController(EventService _eventDb)
        {
            eventDb = _eventDb;
        }

        [HttpGet]
        public ActionResult<List<Event>> GetEventList()
        {
            return eventDb.GetEventList().ToList();
        }

        [HttpPut]
        public ActionResult<Event> UpdateEvent([FromBody] Event selectedEvent)
        {
            return eventDb.UpdateEvent(selectedEvent);
        }

        [HttpPatch]
        public ActionResult<string> RemoveEvent([FromQuery] int id)
        {
            return eventDb.RemoveEvent(id);
        }

        [HttpDelete]
        public ActionResult<string> DeleteEvent([FromQuery] int id)
        {
            return eventDb.DeleteEvent(id);
        }
    }
}