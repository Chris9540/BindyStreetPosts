using System.Collections.Generic;
using System.Linq;
using BindyStreetPosts.DataContext;
using BindyStreetPosts.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace BindyStreetPosts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserDataController : ControllerBase
    {

        private DBContext _context;

        public UserDataController(DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<UserData> Get()
        {
            return _context.Users.Where(ud => ud.Id < 2).ToArray();
        }
    }
}