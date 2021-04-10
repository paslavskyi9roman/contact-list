import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Users } from '../shared/models/user';

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

    this.userService.getUserList().subscribe((res) => {
      this.users = res.map((e) => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data() as Users
      } as Users));
    });
  }

  interactUsers() {
    this.userService.getUsers().subscribe((users) => (this.users = [...users]));
  }
}


