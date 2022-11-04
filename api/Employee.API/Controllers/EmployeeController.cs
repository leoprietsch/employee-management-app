using Microsoft.AspNetCore.Mvc;
using Entities = Employee.Domain.Entities;

namespace Employee.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientController : ControllerBase
    {
        public ClientController() { }

        [HttpGet]
        public ActionResult<Entities.Employee[]> GetAll()
          => Ok(new Entities.Employee[] { });

        [HttpGet("{id}")]
        public ActionResult<Entities.Employee> GetById(int id)
          => Ok(new Entities.Employee());

        [HttpPost]
        public ActionResult Create()
          => Ok();

        [HttpPut("{id}")]
        public ActionResult Update(int id)
          => Ok();

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
          => Ok();
    }
}
