import {Component, QueryList, ViewChildren} from '@angular/core'
import {Employee} from "../../models/employee.model";
import {EmployeesService} from "../../services/employees.service";
import {ModalService} from "../../services/modal.service";
import {
    SortableHeaderDirective,
    SortEvent,
    compare,
} from '../../directives/sortable-header.directive';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

    filter: string;
    data: Array<Employee> = [];
    @ViewChildren(SortableHeaderDirective) headers: QueryList<SortableHeaderDirective>;
    constructor(
        public employeesService: EmployeesService,
        public modalService: ModalService
    ) {}
    
    ngOnInit(): void {
        this.getEmployees();
    }

    public getEmployees() {
        this.employeesService.getEmployees()
            .subscribe(() => {this.employeesService.employees = this.employeesService.initialData})
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

    onSort({ column, direction }: SortEvent) {
        this.data = this.employeesService.employees
        
        this.headers.forEach((header) => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });

        if (direction === '' || column === '') {
            this.employeesService.employees = this.employeesService.initialData;
        } else {
            this.employeesService.employees = [...this.data].sort((a, b) => {
                const res = compare(a[column], b[column]);
                return direction === 'asc' ? res : -res;
            });
        }
    }

    getSortIconVisibility(column: string, currentDirection: string): string {
        if (this.headers) {
            const header = this.headers.find(h => h.sortable === column);
            if (header) {
                return header.direction === currentDirection ? 'inline' : 'none';
            }
        }
        return 'none';
    }
}