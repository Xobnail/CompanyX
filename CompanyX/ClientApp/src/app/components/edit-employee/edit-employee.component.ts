import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ModalService} from "../../services/modal.service";
import {EmployeesService} from "../../services/employees.service";
import {Employee} from "../../models/employee.model";
import {EmployeesComponent} from "../employees/employees.component";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  form = new FormGroup({
    employeeId: new FormControl(this.modalService.currentEditEmployee.employeeId),
    name: new FormControl(this.modalService.currentEditEmployee.name),
    department: new FormControl(this.modalService.currentEditEmployee.department),
    dateOfBirth: new FormControl(this.modalService.currentEditEmployee.dateOfBirth),
    hireDate: new FormControl(this.modalService.currentEditEmployee.hireDate),
    salary: new FormControl(this.modalService.currentEditEmployee.salary)
  })
  
  constructor(public modalService: ModalService,
              private employeesService: EmployeesService) { }
  
  save() {
    this.employeesService.editEmployee(this.form.value).subscribe(() => {
      this.modalService.close();
    })
  }
  
  ngOnInit() {
  }
}
