import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { BasicRoutingModule } from './basic-routing.module';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,
    FormsModule
  ]
})
export class BasicModule { }
