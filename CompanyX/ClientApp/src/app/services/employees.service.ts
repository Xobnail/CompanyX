import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  
  public getEmployees() : Observable<Employee[]> {
    let employeesEndpointUrl = "employee/employees";
    return this.http.get<Employee[]>(environment.apiURL + employeesEndpointUrl)
    
    // let employees = new Array<Employee>()
    //
    // employees.push(
    //     new Employee("123", "123", "first", new Date(Date.now()), new Date(Date.now()), 123)
    // )
    // employees.push(
    //     new Employee("456", "456", "second", new Date(Date.now()), new Date(Date.now()), 456)
    // )
    //
    // return employees
  }
}
