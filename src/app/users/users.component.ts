import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Users } from '../shared/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[];

  query;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.loadUsers();
    this.interactUsers();
  }

  interactUsers() {
    this.userService.getUsers().subscribe((users) => (this.users = [...users]));
  }
}


