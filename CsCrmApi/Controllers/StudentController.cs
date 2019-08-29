using System.Collections.Generic;
using System.Linq;
using CsCrmApi.Entities;
using CsCrmApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CsCrmApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private  readonly StudentService _studentService;
        
        public StudentController(StudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public ActionResult<List<Student>> GetStudentList()
        {
            return _studentService.GetStudentList().ToList();
        }

        [HttpGet ("{id}")]
		public ActionResult<Student> GetStudentById (int id) 
        {
			return _studentService.GetStudentById (id);
		}

        [HttpPost]
        public ActionResult<Student> AddUser([FromBody] Student student) 
        {
            return _studentService.SaveStudent(student);
        }

        [HttpPut]
        public ActionResult<Student> UpdateStudent([FromBody] Student student)
        {
            return _studentService.UpdateStudent(student);
        }

        // PATCH api/user/removestudent/1
        [HttpPatch("{id}")]
        public ActionResult<string> RemoveStudent([FromQuery] int id)
        {
            return _studentService.RemoveStudent(id);
        }

        // DELETE api/user/deletestudent/1
        [HttpDelete("{id}")]
        public ActionResult<string> DeleteStudent([FromQuery] int id)
        {
            return _studentService.DeleteStudent(id);
        }
    }
}