import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  onDisabilityChange() {
    console.log('Disability changed to:', this.employee.disability);

    if (this.employee.disability !== 'Yes') {
      this.employee.typeOfDisability = '';
    }
  }


  addEmployee() {
    // Just an extra safeguard
    if (this.employee.disability !== 'Yes') {
      this.employee.typeOfDisability = 'No';
      this.employee.typeOfDisability='';
    }
    if (this.employee.id === 0) {
      delete this.employee.id;
    }

    this.employeeService.createEmployee(this.employee).subscribe(() => {
      this.gotoEmployeeList();
    });
  }

  OnSubmit() {
    console.log('Final Employee object to send:', this.employee);

    console.log('Form Submitted');
    console.log('Disability:', this.employee.disability);
    console.log('Type of Disability:', this.employee.typeOfDisability);
    this.addEmployee();
    alert('Successfully created!');
  }


  gotoEmployeeList() {
    this.router.navigate(['employee-list']);
  }
}
