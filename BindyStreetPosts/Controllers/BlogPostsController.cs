using System.Collections.Generic;
using System.Linq;
using BindyStreetPosts.DataContext;
using BindyStreetPosts.Models;
using Microsoft.AspNetCore.Mvc;

namespace BindyStreetPosts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlogPostsController : ControllerBase
    {

        private DBContext _context;

        public BlogPostsController(DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<BlogPost> Get()
        {
            return _context.BlogPosts.Where(p => p.Id < 31).ToArray();
        }
    }
}
