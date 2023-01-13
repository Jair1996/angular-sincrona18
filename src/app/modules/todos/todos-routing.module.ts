import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './pages/todos-list/todos-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: TodosListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
