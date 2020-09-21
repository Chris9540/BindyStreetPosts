using BindyStreetPosts.DataContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BindyStreetPosts.Models
{
    public class DataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new DBContext(
                serviceProvider.GetRequiredService<DbContextOptions<DBContext>>()))
            {
                // Look for any board games already in database.
                if (context.BlogPosts.Any() || context.ToDo.Any() || context.Users.Any())
                {
                    return;   // Database has been seeded
                }

            

                Newtonsoft.Json.Linq.JArray posts = Newtonsoft.Json.Linq.JArray.Parse(System.IO.File.ReadAllText("posts.json"));
                Newtonsoft.Json.Linq.JArray users = Newtonsoft.Json.Linq.JArray.Parse(System.IO.File.ReadAllText("users.json"));
                Newtonsoft.Json.Linq.JArray todo = Newtonsoft.Json.Linq.JArray.Parse(System.IO.File.ReadAllText("todos.json"));


                context.BlogPosts.AddRange(Enumerable.Range(0, posts.ToArray().Length).Select(index => new BlogPost
                {
                    Id = (int)posts[index]["id"],
                    UserId = (int)posts[index]["userId"],
                    Title = (string)posts[index]["title"],
                    Body = (string)posts[index]["body"]
                }).ToArray());

                context.ToDo.AddRange(Enumerable.Range(0, todo.ToArray().Length).Select(index => new ToDo
                {
                    Id = (int)todo[index]["id"],
                    UserId = (int)todo[index]["userId"],
                    Title = (string)todo[index]["title"],
                    Completed = (bool)todo[index]["completed"]
                }).ToArray());

                context.Users.AddRange(Enumerable.Range(0, users.ToArray().Length).Select(index => new UserData
                {
                    Id = (int)users[index]["id"],
                    Name = (string)users[index]["name"],
                    UserName = (string)users[index]["username"],
                    Email = (string)users[index]["email"],
                    Street = (string)users[index]["address"]["street"],
                    Suite = (string)users[index]["address"]["suite"],
                    City = (string)users[index]["address"]["city"],
                    Zipcode = (string)users[index]["address"]["zipcode"],
                    Lat = (string)users[index]["address"]["geo"]["lat"],
                    Lng = (string)users[index]["address"]["geo"]["lng"],
                    Phone = (string)users[index]["phone"],
                    Website = (string)users[index]["website"],
                    CompanyName = (string)users[index]["company"]["name"],
                    CatchPhrase = (string)users[index]["company"]["catchPhrase"],
                    Bs = (string)users[index]["company"]["bs"]
                }).ToArray());

                context.SaveChanges();
            }
        }
    }
}
