using System;

namespace CompanyX.Domain.Entities
{
    public class Employee
    {
        public Guid EmployeeId { get; set; }
        public string Department { get; set; }
        public string Name { get; set; }
        public DateTimeOffset DateOfBirth { get; set; }
        public DateTimeOffset HireDate { get; set; }
        public int Salary { get; set; }
    }
}