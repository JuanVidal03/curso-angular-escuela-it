import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// para consumir apis
import { HttpClientModule } from '@angular/common/http';

import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule } from '@angular/forms';
// componentes
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
// servicio
import { TodoService } from '@todo/services/todo.service'

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
