import {Component} from '@angular/core'
import {Employee} from "../../models/employee.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { map } from 'rxjs/operators';
import {EmployeesService} from "../../services/employees.service";
import {ModalService} from "../../services/modal.service";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
    //employees: Employee[] = []
    
    constructor(
        public employeesService: EmployeesService,
        public modalService: ModalService
    ) {}
    
    ngOnInit(): void {
        this.getEmployees();
    }

    public getEmployees() {
        this.employeesService.getEmployees()
            .subscribe((result: Employee[]) => {
                // console.log(this.employeesService.employees)
                // result.forEach(el=>this.employees.push(
                //     new Employee(
                //         el.employeeId,
                //         el.department,
                //         el.name,
                //         el.dateOfBirth,
                //         el.hireDate,
                //         el.salary)))
            })
    }
    
    openCreateEmployee() {
        this.modalService.showCreateEmployee();
    }

    openEditEmployee(employee: Employee) {
        this.modalService.showEditEmployee(employee);
    }

    openDeleteEmployee(employee: Employee) {
        this.modalService.showDeleteEmployee(employee);
    }
}