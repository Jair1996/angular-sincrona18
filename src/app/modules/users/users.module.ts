import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersTableComponent } from './components/users-table/users-table.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,

  ]
})
export class UsersModule { }
