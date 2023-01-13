import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styles: [],
})
export class TodoDetailComponent implements OnInit {
  todo: Todo | null = null;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap(({ idTodo }) => this.todoService.getTodosById(idTodo)))
      .subscribe({
        next: (todo) => {
          this.todo = todo;
        },
      });
  }
}
