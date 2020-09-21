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
    public class UserDataController : ControllerBase
    {

        private readonly ILogger<UserDataController> _logger;

        public UserDataController(ILogger<UserDataController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<UserData> Get()
        {
            JArray jArray = JArray.Parse(System.IO.File.ReadAllText("users.json"));

            return Enumerable.Range(0, 1).Select(index => new UserData
            {
                id = (int)jArray[index]["id"],
                name = (string)jArray[index]["name"],
                userName = (string)jArray[index]["username"],
                email = (string)jArray[index]["email"],
                street = (string)jArray[index]["address"]["street"],
                suite = (string)jArray[index]["address"]["suite"],
                city = (string)jArray[index]["address"]["city"],
                zipcode = (string)jArray[index]["address"]["zipcode"],
                lat = (string)jArray[index]["address"]["geo"]["lat"],
                lng = (string)jArray[index]["address"]["geo"]["lng"],
                phone = (string)jArray[index]["phone"],
                website = (string)jArray[index]["website"],
                companyName = (string)jArray[index]["company"]["name"],
                catchPhrase = (string)jArray[index]["company"]["catchPhrase"],
                bs = (string)jArray[index]["company"]["bs"]
            })
            .ToArray();

        }
    }
}