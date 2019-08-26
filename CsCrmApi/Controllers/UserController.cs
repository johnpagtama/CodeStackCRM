using System.Collections.Generic;
using System.Linq;
using CsCrmApi.Entities;
using CsCrmApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CsCrmApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private  readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult<List<User>> GetUserList()
        {
            return _userService.GetUserList().ToList();
        }

        [HttpGet ("{id}")]
		public ActionResult<User> GetUserById (int id) 
        {
			return _userService.GetUserById (id);
		}

        [HttpPost]
        public ActionResult<User> AddUser([FromBody] User user) 
        {
            return _userService.SaveUser(user);
        }

        [HttpPut]
        public ActionResult<User> UpdateUser([FromBody] User user)
        {
            return _userService.UpdateUser(user);
        }

        // PATCH api/user/removeuser/1
        [HttpPatch("{id}")]
        public ActionResult<string> RemoveUser([FromQuery] int id)
        {
            return _userService.RemoveUser(id);
        }

        // DELETE api/user/deleteuser/1
        [HttpDelete("{id}")]
        public ActionResult<string> DeleteUser([FromQuery] int id)
        {
            return _userService.DeleteUser(id);
        }
    }
}