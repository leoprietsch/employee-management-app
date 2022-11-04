using System.Net;
using Employee.API.Models;
using Employee.Domain.Contracts;
using Microsoft.AspNetCore.Mvc;
using Entities = Employee.Domain.Entities;

namespace Employee.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        public EmployeeController(IEmployeeService employeeService)
          => _employeeService = employeeService;

        [HttpGet]
        [ProducesResponseType(204)]
        [ProducesResponseType(typeof(Entities.Employee[]), 200)]
        public ActionResult<Entities.Employee[]> GetAll()
        {
            var employees = _employeeService.GetAll();

            if (employees.Length < 1)
                return NoContent();
            else
                return Ok(employees);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(typeof(Entities.Employee), 200)]
        public ActionResult<Entities.Employee> GetById(int id)
        {
            var employee = _employeeService.Get(id);

            if (employee == null)
                return NoContent();
            else
                return Ok(employee);
        }

        [HttpPost]
        [ProducesResponseType(typeof(Entities.Employee), 201)]
        public ActionResult Create([FromBody] EmployeeCommandModel employeeCommandModel)
        {
            var employee = new Entities.Employee(
              employeeCommandModel.Name,
              employeeCommandModel.BirthDate.Value,
              employeeCommandModel.Gender,
              employeeCommandModel.Email,
              employeeCommandModel.CPF,
              employeeCommandModel.StartDate.Value,
              employeeCommandModel.Team);

            employee = _employeeService.Create(employee);

            return StatusCode((int)HttpStatusCode.Created, employee);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(typeof(Entities.Employee), 200)]
        public ActionResult Update(int id, [FromBody] EmployeeCommandModel employeeCommandModel)
        {
            var employee = _employeeService.Update(id, new Entities.Employee(
              employeeCommandModel.Name,
              employeeCommandModel.BirthDate.Value,
              employeeCommandModel.Gender,
              employeeCommandModel.Email,
              employeeCommandModel.CPF,
              employeeCommandModel.StartDate.Value,
              employeeCommandModel.Team));

            return Ok(employee);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        public ActionResult Delete(int id)
        {
            _employeeService.Delete(id);
            return StatusCode((int)HttpStatusCode.NoContent);
        }
    }
}
