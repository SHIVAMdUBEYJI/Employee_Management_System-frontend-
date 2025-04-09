import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
 id!: number;
employee:Employee =new Employee();

constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){}



ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.employeeService.employeeFindById(this.id).subscribe(data =>{
    this.employee=data
  })
}
OnSubmit() {
this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
  // this.employee.sort((a, b) => a.id - b.id);
  alert("Successfully Updated !!");
this.gotoEmployeeList();
}
,error=>console.log(error)
)

  }

  gotoEmployeeList(){
    this.router.navigate(['/employee-list'])
  }
}
