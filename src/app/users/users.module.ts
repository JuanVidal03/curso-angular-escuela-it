import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

// componentes
import { ListComponent } from '@users/components/list/list.component';
import { UsersComponent } from '@users/components/users/users.component';

// servicios
import { UsersService } from '@users/services/users.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    UsersService
  ]
})
export class UsersModule { }
