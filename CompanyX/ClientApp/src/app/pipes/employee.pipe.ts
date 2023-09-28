import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({ name: 'employee' })
export class EmployeePipe implements PipeTransform {
    transform(values: Employee[], filter: string): Employee[] {
        if (!filter || filter.length === 0) {
            return values;
        }

        if (values.length === 0) {
            return values;
        }

        return values.filter((value: Employee) => {
            const departmentFound = value.department.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            const nameFound = value.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            const salaryFound = value.salary.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;

            if (departmentFound || nameFound || salaryFound) {
                return value;
            }
        });
    }
}