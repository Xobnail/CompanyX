import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Employee} from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  activeContainer: string;
  title:string
  currentEditEmployee: Employee;
  employeeToDelete: Employee;

  showCreateEmployee() {
    this.title = 'Create employee';
    this.activeContainer = 'create';
    this.isVisible$.next(true);
  }

  showEditEmployee(employee: Employee) {
    this.currentEditEmployee = employee;
    this.title = 'Edit employee';
    this.activeContainer = 'edit';
    this.isVisible$.next(true);
  }

  showDeleteEmployee(employee: Employee) {
    this.employeeToDelete = employee;
    this.title = 'Delete employee';
    this.activeContainer = 'delete';
    this.isVisible$.next(true);
  }
  
  close(){
    this.isVisible$.next(false)
  }
}
