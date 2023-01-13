import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodosListComponent } from './pages/todos-list/todos-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: TodosListComponent,
        children: [
          {
            path: ':idTodo',
            component: TodoDetailComponent
          }
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
