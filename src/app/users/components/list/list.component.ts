import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  name!:string;

  users = [
    {
      name: 'Nicolas',
      number: 2
    },
    {
      name: 'Juan',
      number: 1
    }
  ]

  // agregando nuevo usuario al array de usuario
  addUser(){
    this.users.push({
      name: this.name,
      number: 12,
    });
    this.name = '';
  }

  // haciendo un ejemplo como si fuera un pipe
  calcFiconacic(num:number):number {
    console.log('Fibonacci');
    return num;
    // return fibonacci(num);
  }
  
}