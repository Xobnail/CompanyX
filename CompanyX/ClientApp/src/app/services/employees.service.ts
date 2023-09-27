import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";

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
  
  public toReadableDate(dateTimeOffset: string) : string {
    let date = new Date(dateTimeOffset);
    
    let day = date.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    let month = date.getMonth().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    let year = date.getFullYear().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    
    return day + "." + month + "." + year
  }
}
