import { Component } from "@angular/core";
import { EmployeeComponent } from "../employee/employee.component";
@Component({
    imports: [EmployeeComponent],
    standalone: true,
    selector: "app-employees",
    templateUrl: "./employees.component.html",
    styleUrls: ["./employees.component.css"]

})


export class EmpleadosComponent{
}