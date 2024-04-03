import { Component, OnInit } from '@angular/core';
// importar servicios
import { TodoService } from '@todo/services/todo.service';
// modelo del todo
import { Todo } from '@todo/models/todo.model';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  // llamando al servicios
  constructor(
    private todoService: TodoService,
  ){}

  // aqui van a estar todos los todos
  todos:Todo[] = [];

  // renderizar los todos por primera vez
  ngOnInit() {
    this.todoService.getAllTodos()
      .subscribe(todos => {
        this.todos = todos;
      })
  }

  // tarea a agregar
  task!:string
  // creando el todo
  createTodo(todo:string){
    // esquema del todo a añadir
    const newTodo:Todo = {
      title: todo,
      id: 1200,
      completed: false,
      userId: 1
    }

    this.todoService.createTodo(newTodo).subscribe(todo => {
      this.todos.unshift(todo);
      this.task = '';
    });
  }

  // eliminando el todo
  onDeleteTodo(todoId:number, index:number): void {
    this.todoService.deleteTodo(todoId).subscribe(res => {
      this.todos.splice(index, 1);
    });
  }

  // actualizar todo
  onUpdateTodo(todo:Todo, index:number){
    this.todoService.updateTodo(todo).subscribe(updateCompleteState => {
      // actualizando el estado de la tarea
      updateCompleteState.completed == true ? updateCompleteState.completed = false : updateCompleteState.completed = true; 
      this.todos[index] = updateCompleteState;
    })
  }
}