import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './Employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, EmpleadosComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fernanda';

  greet = 'Hola'
}
