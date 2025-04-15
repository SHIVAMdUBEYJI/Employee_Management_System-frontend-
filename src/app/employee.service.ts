import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Employeeresponse } from './employeeresponse';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'https://employee-management-system-backend-iwln.onrender.com/api/v1';

  constructor(private httpClient: HttpClient) {}


  getAllEmployees(page: number = 0, size: number = 10): Observable<Employeeresponse> {
    const url = `${this.baseUrl}/getAll?page=${page}&size=${size}`;
    return this.httpClient.get<Employeeresponse>(url);
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseUrl}/add`,employee)
  }

  employeeFindById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/findById/${id}`);
  }
  searchEmployeesByName(fullName: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}/search?fullName=${fullName}`);
  }


  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update/${id}`, employee);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`)
  }
}
