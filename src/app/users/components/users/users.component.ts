import { Component, OnInit } from '@angular/core';
// importar el sericio de los usuarios
import { UsersService } from '@users/services/users.service';
// modelo del usuario
import { User } from '@users/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  
  // creando los usuarios, esta informacion se va a actualizar por la que viene de la api
  users:any = [];

  // usando el servicio
  constructor(
    private usersService:UsersService
  ){}
  
  // numero de items a mostrar de la api
  limit!:number;
  // cuando cargue el componente por primera vez se va llenar el array de users con la informacion del servicio
  ngOnInit(){
    this.usersService.getAllUsers(this.limit)
      .subscribe(users => {
        this.users = users;
      })
  }

  fetchUsers(){
    this.usersService.getAllUsers(this.limit)
      .subscribe(users => {
        this.users = users;
      })
  }

}
