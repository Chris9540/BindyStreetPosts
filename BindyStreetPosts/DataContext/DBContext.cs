using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BindyStreetPosts.DataContext
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options)
            : base(options)
        {
        }

        public DbSet<Models.BlogPost> BlogPosts { get; set; }

        public DbSet<Models.UserData> Users { get; set; }

        public DbSet<Models.ToDo> ToDo { get; set; }

    }
}
