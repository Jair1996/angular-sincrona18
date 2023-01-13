import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosListComponent } from './pages/todos-list/todos-list.component';
import { TodosTableComponent } from './components/todos-table/todos-table.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TodosListComponent,
    TodosTableComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    RouterModule
  ]
})
export class TodosModule { }
