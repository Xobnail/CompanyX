using System;
using System.Collections.Generic;
using CompanyX.Domain.Entities;

namespace CompanyX.Domain.Abstractions
{
    /// <summary>
    /// Repository for working with the employee entity
    /// </summary>
    public interface IEmployeeRepository
    {
        /// <summary>
        /// Gets all employees
        /// </summary>
        /// <returns>Employees list</returns>
        public IEnumerable<Employee> GetAll();
        
        /// <summary>
        /// Creates employee
        /// </summary>
        /// <param name="employee">Employee to create</param>
        /// <returns>True if created, false if not created</returns>
        public bool CreateEmployee(Employee employee);
        
        /// <summary>
        /// Edits employee
        /// </summary>
        /// <param name="employee">Employee to edit</param>
        /// <returns>True if edited, false if not edited</returns>
        public bool EditEmployee(Employee employee);
        
        /// <summary>
        /// Deletes employee
        /// </summary>
        /// <param name="id">Employee to delete</param>
        /// <returns>True if deleted, false if not deleted</returns>
        public bool DeleteEmployee(Guid id);
    }
}