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
  idUser!: number;
  toogleMessage: boolean = true;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idUser = Number(this.route.snapshot.paramMap.get('id'));

    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos.filter((todo) => todo.userId === this.idUser);
    });
  }
}
