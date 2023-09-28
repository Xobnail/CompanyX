import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {EmployeesService} from "../../services/employees.service";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(public modalService: ModalService,
              private employeesService: EmployeesService) { }

  delete() {
    this.employeesService.deleteEmployee(this.modalService.employeeToDelete).subscribe(() => {
      this.modalService.close()
      this.employeesService.employees = this.employeesService.initialData
    })
  }
  
  ngOnInit() {
  }
}
