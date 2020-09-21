using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace BindyStreetPosts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlogPostsController : ControllerBase
    {

        private readonly ILogger<BlogPostsController> _logger;

        public BlogPostsController(ILogger<BlogPostsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<BlogPost> Get()
        {
            JArray jArray = JArray.Parse(System.IO.File.ReadAllText("posts.json"));
            return Enumerable.Range(0, 29).Select(index => new BlogPost
            {
                id = (int)jArray[index]["id"],
                userId = (int)jArray[index]["userId"],
                title = (string)jArray[index]["title"],
                body = (string)jArray[index]["body"]
            })
            .ToArray();
        }
    }
}
