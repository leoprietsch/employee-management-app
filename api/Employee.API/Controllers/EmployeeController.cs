using Microsoft.AspNetCore.Mvc;

namespace Employee.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientController : ControllerBase
    {
        public ClientController() { }

        [HttpGet]
        public ActionResult GetAll()
          => Ok();

        [HttpGet("{id}")]
        public ActionResult GetById()
          => Ok();

        [HttpPost]
        public ActionResult Create()
          => Ok();

        [HttpPut("{id}")]
        public ActionResult Update()
          => Ok();

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
          => Ok();
    }
}
