import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management System';
  searchQuery: string = '';
  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/employee-list'], {
        queryParams: { fullName: this.searchQuery.trim() },
      });
    }
  }
}
