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
    /// <summary>
    /// Contains basic CRUD operations for Employees
    /// </summary>
    [Route("[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }
        
        /// <summary>
        /// Gets all employees
        /// </summary>
        /// <returns>Employees list</returns>
        [HttpGet]
        [Route("employees")]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            return Ok(_employeeRepository.GetAll());
        }

        /// <summary>
        /// Creates employee
        /// </summary>
        /// <param name="employee">Employee to create</param>
        /// <returns>Created employee</returns>
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

        /// <summary>
        /// Edits employee
        /// </summary>
        /// <param name="employee">Employee to edit</param>
        /// <returns>Edited employee</returns>
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

        /// <summary>
        /// Deletes employee
        /// </summary>
        /// <param name="employee">Employee to delete</param>
        /// <returns>Employee</returns>
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