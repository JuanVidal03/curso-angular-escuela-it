import { Injectable } from '@angular/core';
// conexion con l api
import { HttpClient } from '@angular/common/http';
// modelo que va a tener el todo
import { Todo } from '@todo/models/todo.model';


@Injectable()
export class TodoService {

  constructor( private http:HttpClient ) {}

  // url de las peticiones
  path = 'https://jsonplaceholder.typicode.com/todos';

  // todos los todos
  getAllTodos(){
    return this.http.get<Todo[]>(this.path)
  }

  // obtener todo por id
  getTodoById(todoId:number){
    return this.http.get<Todo>(`${this.path}/${todoId}`);
  }

  // crear todo
  createTodo(todo:Todo){
    return this.http.post<Todo>(this.path, todo)
  }

  // eliminando un todo por id
  deleteTodo(todoId:number){
    return this.http.delete(`${this.path}/${todoId}`);
  }

  // actualizando un todo
  updateTodo(todo:Todo){
    return this.http.put<Todo>(`${this.path}/${todo.id}`, todo)
  }
}
