import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { Guid } from 'guid-typescript';
import {EmployeesService} from "../../services/employees.service";
import {ModalService} from "../../services/modal.service";
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  form = new FormGroup({
    employeeId: new FormControl(Guid.create().toString()),
    name: new FormControl(),
    department: new FormControl(),
    dateOfBirth: new FormControl(),
    hireDate: new FormControl(),
    salary: new FormControl()
  })
  
  constructor(public modalService: ModalService,
              private employeesService: EmployeesService) { }

  create() {
    this.employeesService.createEmployee(this.form.value).subscribe(() => {
      console.log("subscribe")
      this.modalService.close();
    })
  }
  
  ngOnInit() {
  }
}
