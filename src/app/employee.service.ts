import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Employeeresponse } from './employeeresponse';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/getAll';

  constructor(private httpClient: HttpClient) {}


  getAllEmployees(page: number = 0, size: number = 10): Observable<Employeeresponse> {
    const url = `${this.baseUrl}?page=${page}&size=${size}`;
    return this.httpClient.get<Employeeresponse>(url);
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post<Object>(`${'http://localhost:8080/api/v1/add'}`,employee)
  }

  employeeFindById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`http://localhost:8080/api/v1/findById/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`http://localhost:8080/api/v1/update/${id}`, employee);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/api/v1/delete/${id}`)
  }
}
