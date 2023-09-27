using System;
using System.Collections.Generic;
using CompanyX.Domain.Entities;

namespace CompanyX.Domain.Abstractions
{
    public interface IEmployeeRepository
    {
        public IEnumerable<Employee> GetAll();
        public bool CreateEmployee(Employee employee);
        public bool EditEmployee(Employee employee);
        
        public bool DeleteEmployee(Guid id);
    }
}