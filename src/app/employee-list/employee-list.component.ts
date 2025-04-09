import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {




  // employeeDetails(employee: Employee) {
  //   this.employeeService.employeeFindById(employee.id?).subscribe(
  //     (data) => {
  //       console.log(data); // Process the fetched employee details here
  //     },
  //     (error) => {
  //       console.error('Error fetching employee details:', error);
  //     }
  //   );
  // }



  employees:Employee[]=[];
  currentPage: number = 0;
  totalPages: number = 0;

  constructor(private employeeService: EmployeeService,private router:Router) {}

  getEmployees(page: number = 0): void {
    this.employeeService.getAllEmployees(page).subscribe(response => {
      this.employees = response.content;
      this.totalPages = response.totalPages;
      this.currentPage = response.number;
      

    });
  }


  updateEmployee(id: number|undefined) {
this.router.navigate(['update-employee' ,id])
  }

  deleteEmployee(id: number ): void {
    if (confirm("Are you sure you want to delete this employee?")) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: (response) => {
          alert('Employee deleted successfully.');

          this.getEmployees();
        },
        error: (error) => {
          alert('Error deleting employee. Please try again.');
          console.error('Delete error:', error);
        },
      });
    }
  }
  nextPage(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.getEmployees(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.getEmployees(this.currentPage - 1);
    }
  }

  ngOnInit(): void {
    this.getEmployees();
  }

}
