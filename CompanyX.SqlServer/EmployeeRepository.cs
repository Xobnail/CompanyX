using System;
using System.Collections.Generic;
using CompanyX.Domain.Abstractions;
using CompanyX.Domain.Entities;
using System.Linq;

namespace CompanyX.SqlServer
{
    /// <summary>
    /// Main implementation of IEmployeeRepository.
    /// Contains basic CRUD operations for Employees.
    /// </summary>
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly AppDbContext _dbContext;
        public EmployeeRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        /// <summary>
        /// Gets all employees
        /// </summary>
        /// <returns>Employees list</returns>
        public IEnumerable<Employee> GetAll()
        {
            return _dbContext.Employees.ToList();
        }
        
        /// <summary>
        /// Creates new employee
        /// </summary>
        /// <param name="employee">Employee to create</param>
        /// <returns>True if created, false if not created</returns>
        public bool CreateEmployee(Employee employee)
        {
            _dbContext.Employees.Add(employee);

            return _dbContext.SaveChanges() > 0;
        }

        /// <summary>
        /// Edits employee
        /// </summary>
        /// <param name="employee">Employee to edit</param>
        /// <returns>True if edited, false if not edited</returns>
        public bool EditEmployee(Employee employee)
        {
            var employeeToEdit = _dbContext.Employees.Find(employee.EmployeeId);

            if (employeeToEdit == null)
            {
                return false;
            }
            
            employeeToEdit.Department = employee.Department;
            employeeToEdit.Name = employee.Name;
            employeeToEdit.DateOfBirth = employee.DateOfBirth;
            employeeToEdit.HireDate = employee.HireDate;
            employeeToEdit.Salary = employee.Salary;

            return _dbContext.SaveChanges() > 0;
        }
        
        /// <summary>
        /// Deletes employee
        /// </summary>
        /// <param name="id">Employee to delete</param>
        /// <returns>True if deleted, false if not deleted</returns>
        public bool DeleteEmployee(Guid id)
        {
            var employeeToDelete = _dbContext.Employees.Find(id);

            if (employeeToDelete == null)
            {
                return false;
            }

            _dbContext.Employees.Remove(employeeToDelete);

            return _dbContext.SaveChanges() > 0;
        }
    }
}