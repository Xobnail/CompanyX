using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using CompanyX.Domain.Abstractions;
using CompanyX.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;


namespace CompanyX.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }
        
        [HttpGet]
        [Route("employees")]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            return Ok(_employeeRepository.GetAll());
        }

        [HttpPost]
        [Route("create-employee")]
        public ActionResult<IEnumerable<Employee>> CreateEmployee(Employee employee)
        {
            return Ok(_employeeRepository.CreateEmployee(employee));
        }

        [HttpPut]
        [Route("edit-employee")]
        public ActionResult EditEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (!_employeeRepository.EditEmployee(employee))
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpDelete]
        [Route("delete-employee")]
        public ActionResult DeleteEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            
            if (!_employeeRepository.DeleteEmployee(employee.EmployeeId))
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}