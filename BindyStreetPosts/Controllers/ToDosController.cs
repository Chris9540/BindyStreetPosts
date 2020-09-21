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
    public class ToDosController : ControllerBase
    {

        private readonly ILogger<ToDosController> _logger;

        public ToDosController(ILogger<ToDosController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ToDo> Get()
        {
            JArray jArray = JArray.Parse(System.IO.File.ReadAllText("todos.json"));
            return Enumerable.Range(0, 29).Select(index => new ToDo
            {
                id = jArray[index]["id"].ToString(),
                count = jArray[index]["title"].ToString().Length,
                title = (string)jArray[index]["title"]

            })
            .ToArray();
        }
    }
}