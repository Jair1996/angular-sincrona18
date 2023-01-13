import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosListComponent } from './pages/todos-list/todos-list.component';
import { TodosTableComponent } from './components/todos-table/todos-table.component';
import { RouterModule } from '@angular/router';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';


@NgModule({
  declarations: [
    TodosListComponent,
    TodosTableComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    RouterModule
  ]
})
export class TodosModule { }
