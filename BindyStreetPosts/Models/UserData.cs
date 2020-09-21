using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BindyStreetPosts.Models
{
    public class UserData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Street { get; set; }
        public string Suite { get; set; }
        public string City { get; set; }
        public string Zipcode { get; set; }
        public string Lat { get; set; }
        public string Lng { get; set; }
        public string Phone { get; set; }
        public string Website { get; set; }
        public string CompanyName { get; set; }
        public string CatchPhrase { get; set; }
        public string Bs { get; set; }
    }
}
