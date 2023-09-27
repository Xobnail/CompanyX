import {Component} from '@angular/core'
import {Employee} from "../../models/employee.model";
import {EmployeesService} from "../../services/employees.service";
import {ModalService} from "../../services/modal.service";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
    
    constructor(
        public employeesService: EmployeesService,
        public modalService: ModalService
    ) {}
    
    ngOnInit(): void {
        this.getEmployees();
    }

    public getEmployees() {
        this.employeesService.getEmployees()
            .subscribe((result: Employee[]) => {})
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