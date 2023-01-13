import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos-table',
  templateUrl: './todos-table.component.html',
  styles: [],
})
export class TodosTableComponent implements OnInit {
  todos: Todo[] = [];
  currentTodo: Todo | null = null;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idUser = Number(this.route.snapshot.paramMap.get('id'));

    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos.filter((todo) => todo.userId === idUser);
    });
  }

  seeDetail(todo: Todo) {
    this.currentTodo = todo;
  }
}
