using Microsoft.EntityFrameworkCore;
using CsCrmApi.Entities;

namespace CsCrmApi.Context
{
    public class CsCrmDbContext : DbContext
    {
        public CsCrmDbContext(DbContextOptions<CsCrmDbContext> options) : base(options) 
        { }
        
        public DbSet<Student> Students { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Event> Events { get; set; }
    }
}
