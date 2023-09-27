using System;
using System.Collections.Generic;
using CompanyX.Domain.Abstractions;
using CompanyX.Domain.Entities;
using System.Linq;

namespace CompanyX.SqlServer
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly AppDbContext _dbContext;
        public EmployeeRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        public IEnumerable<Employee> GetAll()
        {
            return _dbContext.Employees.ToList();
        }
        
        public bool CreateEmployee(Employee employee)
        {
            _dbContext.Employees.Add(employee);

            return _dbContext.SaveChanges() > 0;
        }

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