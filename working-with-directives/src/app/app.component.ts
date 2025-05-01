import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'User Register';

  name = '';
  lastName = '';
  message = '';
  registered = false;

  entries: any[];

  constructor(){
    this.entries = [
      {_title:"Fernanda Piña"},
      {_title:"Ferdinand Pineapple"},
      {_title:"フェルナンダ・ピニャ"},
      {_title:"페르난다 피냐"},
      {_title:"费尔南达·皮纳"},
    ]
  }
  registerUser(){

    this.registered =true;

    this.message = "Successfully logged"
  }
}
