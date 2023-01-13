import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/modules/users/interfaces/user.interface';
import { UserService } from 'src/app/modules/users/services/user.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: [],
})
export class TodosListComponent implements OnInit {
  user!: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idUser = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUserById(idUser).subscribe((user) => {
      this.user = user;
    });
  }
}
