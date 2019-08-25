using System.Collections.Generic;
using System.Linq;
using CsCrmApi.Context;
using CsCrmApi.Entities;
namespace CsCrmApi.Services
{
    public class StudentService
    {
        public readonly CsCrmDbContext _context;
        /* public StudentService(CsCrmDbContext context)
        {
            _context = context;
        } */
        public IEnumerable<Student> GetStudentList()
        {
            return _context.Students.ToList();
        }
        /* public Student GetStudentById(int studentId)
        {
            return _context.Students.FirstOrDefault(u => u.StudentId == studentId);
        }
        public Student SaveStudent(Student student)
        {
            if (student.StudentId == 0)
            {
                _context.Students.Add(student);
            }
            else
            {
                _context.Students.Update(student);
            }
            _context.SaveChanges();
            return student;
        } */
        public Student UpdateStudent(Student student)
        {
            _context.Students.Update(student);
            _context.SaveChanges();
            return student;
        }
        public string DeleteStudent(int StudentId)
        {
            var StudentToDelete = _context.Students.Find(StudentId);
            _context.Students.Remove(StudentToDelete);
            _context.SaveChanges();
            return $"Student {{StudentId}} is Removed";
        }
        public string RemoveStudent(int StudentId)
        {
            var StudentToRemove = _context.Students.Find(StudentId);
            StudentToRemove.IsDeleted = true;
            _context.Students.Update(StudentToRemove);
            _context.SaveChanges();
            return $"Student {{StudentId}} is Deleted";
        }
    }
}