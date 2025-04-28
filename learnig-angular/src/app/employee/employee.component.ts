import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [EmployeeComponent],
  templateUrl: './employee.component.html',
  // template: "<p>Fernanda Piña</p>",
  styleUrl: './employee.component.css',
  // styles: ["p{background-color:red}"]

})
export class EmployeeComponent implements OnInit { //interfaces

  constructor() {

  }

  nombre = "Fernanda"

  apellido = "Piña"

  private edad = 26

  getEdad = () => this.edad + 1 > 20 ? "Old" : "Young"

  getEnterprise(enterprise_name: string){};//this is weird

  enableInput = false //WEEIRDDDD!

  isRegistered = false

  registerText = "No register"

  setIsRegistered = (e: Event)=>{
    const target = e.target as HTMLInputElement
    
    this.isRegistered = target.value === "0"

    this.registerText = this.isRegistered ? "Register" : "No register"
  }

  showAlert = () =>{

    this.registerText = "Registered"
    alert(`This is an alert on ${this.isRegistered ? "check" : "uncheck"}`)
  } 
  
  ngOnInit(): void {

  }

}
