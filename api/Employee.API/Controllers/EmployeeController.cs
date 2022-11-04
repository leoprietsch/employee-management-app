﻿using Employee.API.Models;
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
        public ActionResult<Entities.Employee[]> GetAll()
          => Ok(new Entities.Employee[] { });

        [HttpGet("{id}")]
        public ActionResult<Entities.Employee> GetById(int id)
          => Ok(new Entities.Employee());

        [HttpPost]
        public ActionResult Create([FromBody] EmployeeCommandModel employeeCommandModel)
        {
            var employee = new Entities.Employee(
              employeeCommandModel.Name,
              employeeCommandModel.BirtDate,
              employeeCommandModel.Gender,
              employeeCommandModel.Email,
              employeeCommandModel.CPF,
              employeeCommandModel.StartDate,
              employeeCommandModel.Team);

            return StatusCode(201, employee);
        }

        [HttpPut("{id}")]
        public ActionResult Update(int id)
          => Ok();

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
          => Ok();
    }
}
