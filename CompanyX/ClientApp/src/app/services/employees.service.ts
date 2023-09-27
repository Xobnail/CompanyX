import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {FormGroup} from "@angular/forms";
import {tap} from "rxjs/operators";
import {EmployeesComponent} from "../components/employees/employees.component";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees: Employee[] = []
  
  constructor(private http: HttpClient) { }
  
  public getEmployees() : Observable<Employee[]> {
    let employeesEndpointUrl = "employee/employees";
    
    return this.http.get<Employee[]>(environment.apiURL + employeesEndpointUrl).pipe(
        tap(employees => this.employees = employees)
    )
  }
  
  public editEmployee(employeeToEdit: Employee) : Observable<Employee> {
    let editEmployeeEndpointUrl = "employee/edit-employee";
    
    return this.http.post<Employee>(environment.apiURL + editEmployeeEndpointUrl, employeeToEdit).pipe(
        tap(employee => {
          this.employees[this.employees.findIndex(emp => emp.employeeId === employeeToEdit.employeeId)] = employee
        })
    )
  }
  
  public createEmployee(employeeToCreate: Employee) : Observable<Employee> {
    let createEmployeeEndpointUrl = "employee/create-employee";

    return this.http.post<Employee>(environment.apiURL + createEmployeeEndpointUrl, employeeToCreate).pipe(
        tap(employee => this.employees.push(employee))
    )
  }
  
  public deleteEmployee(employeeToDelete: Employee) : Observable<Employee> {
    let deleteEmployeeEndpointUrl = "employee/delete-employee";
    
    return this.http.post<Employee>(environment.apiURL + deleteEmployeeEndpointUrl, employeeToDelete).pipe(
        tap(() => {
          this.employees.splice(this.employees.findIndex(emp => emp.employeeId === employeeToDelete.employeeId), 1)
        })
    )
  }
}
