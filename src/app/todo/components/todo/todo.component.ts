import { Component, Input, Output, EventEmitter } from '@angular/core';
// modelo del todo
import { Todo } from '@todo/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent{
  
  // todo que viene del padre
  @Input() todo!:Todo;

  // eliminar todo
  @Output() deleteTodoId = new EventEmitter<number>();
  deleteTodo(){
    this.deleteTodoId.emit(this.todo.id);
  }

  // actualizar todo
  @Output() updatedTodo = new EventEmitter<Todo>();
  updateTodo(){
    this.updatedTodo.emit(this.todo)
  }
}
