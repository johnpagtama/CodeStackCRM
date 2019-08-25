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
    public class UserController : ControllerBase
    {
        private UserService userDb;

        public UserController(UserService _userDb)
        {
            userDb = _userDb;
        }

        [HttpGet]
        public ActionResult<List<User>> GetUserList()
        {
            return userDb.GetUserList().ToList();
        }

        [HttpPut]
        public ActionResult<User> UpdateUser([FromBody] User user)
        {
            return userDb.UpdateUser(user);
        }

        [HttpPatch]
        public ActionResult<string> RemoveUser([FromQuery] int id)
        {
            return userDb.RemoveUser(id);
        }

        [HttpDelete]
        public ActionResult<string> DeleteUser([FromQuery] int id)
        {
            return userDb.DeleteUser(id);
        }
    }
}