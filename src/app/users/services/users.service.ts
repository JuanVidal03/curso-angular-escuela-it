import { Injectable } from '@angular/core';
// para el consumo de apis
import { HttpClient } from '@angular/common/http';
// importar modelo
import { User } from '../models/user.model';
// esto se hace para que se pueda consumir bien la inforacion de la api, se le da la estructura de los elementos que se necesitan traer
interface ResponseUsers {
  results: any;
  info: any;
}

// map para retornar solo los datos importantes de la api
import { map } from 'rxjs/operators';


@Injectable()
export class UsersService {

  constructor(
    private http:HttpClient
  ) { }

  // obteniendo todos los usuarios, con el pipe y el map lo que se hace es traer solo los resultados que se desean, en este caso esta api trae un array de los objetos, results e info. Solo me interesa traer los resultados de result, por eso desde aqui accedo a este elemento
  getAllUsers(limit:number = 5){
    return this.http.get<ResponseUsers>(`https://randomuser.me/api/?results=${limit}`)
      .pipe(
        map(res => res.results)
      );
  }
}
