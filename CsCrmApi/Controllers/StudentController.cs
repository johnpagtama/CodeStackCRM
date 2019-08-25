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
    public class StudentController
    {
        private StudentService studentDb;

        public StudentController(StudentService _studentDb)
        {
            studentDb = _studentDb;
        }

        [HttpGet]
        public ActionResult<List<Student>> GetStudentList()
        {
            return studentDb.GetStudentList().ToList();
        }

        [HttpPut]
        public ActionResult<Student> UpdateStudent([FromBody] Student student)
        {
            return studentDb.UpdateStudent(student);
        }

        [HttpPatch]
        public ActionResult<string> RemoveStudent([FromQuery] int id)
        {
            return studentDb.RemoveStudent(id);
        }

        [HttpDelete]
        public ActionResult<string> DeleteStudent([FromQuery] int id)
        {
            return studentDb.DeleteStudent(id);
        }
    }
}