using System.Collections.Generic;
using System.Linq;
using CsCrmApi.Context;
using CsCrmApi.Entities;
namespace CsCrmApi.Services
{
    public class UserService
    {
        public readonly CsCrmDbContext _context;
        /* public UserService(CsCrmDbContext context)
        {
            _context = context;
        } */
        public IEnumerable<User> GetUserList()
        {
            return _context.Users.ToList();
        }
        /* public User GetUserById(int userId)
        {
            return _context.Users.FirstOrDefault(u => u.UserId == userId);
        }
        public User SaveUser(User user)
        {
            if (user.UserId == 0)
            {
                _context.Users.Add(user);
            }
            else
            {
                _context.Users.Update(user);
            }
            _context.SaveChanges();
            return user;
        } */
        public User UpdateUser (User user)
        {
            _context.Users.Update(user);
            _context.SaveChanges();
            return user;
        }
        public string DeleteUser(int userId)
        {
            var userToDelete = _context.Users.Find(userId);
            _context.Users.Remove(userToDelete);
            _context.SaveChanges();
            return $"User {{userId}} is Removed";
        }
        public string RemoveUser(int userId)
        {
            var userToRemove = _context.Users.Find(userId);
            userToRemove.IsDeleted = true;
            _context.Users.Update(userToRemove);
            _context.SaveChanges();
            return $"User {{userId}} is Removed";
        }
    }
}