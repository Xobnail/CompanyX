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
        public ActionResult<Employee> CreateEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var isCreated = _employeeRepository.CreateEmployee(employee);

            if (isCreated)
            {
                return Ok(employee);
            }
            
            return BadRequest();
        }

        [HttpPost]
        [Route("edit-employee")]
        public ActionResult<Employee> EditEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var isEdited = _employeeRepository.EditEmployee(employee);
            
            if (isEdited)
            {
                return Ok(employee);
            }

            return BadRequest();
        }

        [HttpPost]
        [Route("delete-employee")]
        public ActionResult DeleteEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var isDeleted = _employeeRepository.DeleteEmployee(employee.EmployeeId);
            
            if (isDeleted)
            {
                return Ok(employee);
            }

            return BadRequest();
        }
    }
}