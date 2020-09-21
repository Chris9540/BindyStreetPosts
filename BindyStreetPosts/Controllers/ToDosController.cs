using System.Collections.Generic;
using System.Linq;
using BindyStreetPosts.DataContext;
using BindyStreetPosts.Models;
using Microsoft.AspNetCore.Mvc;

namespace BindyStreetPosts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDosController : ControllerBase
    {

        private DBContext _context;

        public ToDosController(DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Graph> Get()
        {
            ToDo[] todo = _context.ToDo.Where(td => td.Id < 31).ToArray();

            return Enumerable.Range(0, todo.Length).Select(index => new Graph
            {
                id = todo[index].Id.ToString(),
                count = todo[index].Title.ToString().Length
            })
            .ToArray();
        }
    }
}