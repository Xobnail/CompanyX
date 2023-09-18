export class Employee {
    employeeId: string
    department: string
    name: string
    dateOfBirth: Date
    hireDate: Date
    salary: number
    
    constructor(
        employeeId: string,
        department: string,
        name: string,
        dateOfBirth: Date,
        hireDate: Date,
        salary: number
    ) {
        this.employeeId = employeeId
        this.department = department
        this.name = name
        this.dateOfBirth = dateOfBirth
        this.hireDate = hireDate
        this.salary = salary
    }
}