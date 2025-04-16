import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{
  employee: Employee = new Employee();
  id!: number;

  constructor(
    private employeeService: EmployeeService,
    private router: Router, private route:ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }

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
  // OnSubmit1() {
  //   this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
  //     // this.employee.sort((a, b) => a.id - b.id);
  //     alert("Successfully Updated !!");
  //   this.gotoEmployeeList();
  //   }
  //   ,error=>console.log(error)
  //   )

  //     }

}
