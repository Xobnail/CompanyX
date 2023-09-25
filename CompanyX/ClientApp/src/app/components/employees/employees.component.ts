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
    employees: Employee[] = []
    
    constructor(
        private employeesService: EmployeesService,
        public modalService: ModalService
    ) {}
    
    ngOnInit(): void {
        this.employeesService.getEmployees()
            .subscribe((result: Employee[]) => {
                result.forEach(el=>this.employees.push(
                    new Employee(
                        el.employeeId,
                        el.department,
                        el.name,
                        el.dateOfBirth,
                        el.hireDate,
                        el.salary)))
            })
    }

    openCreateModal() {
        this.modalService.showCreateContainer();
    }

    openEditModal() {
        this.modalService.showEditContainer();
    }

    openDeleteModal() {
        this.modalService.showDeleteContainer();
    }
}