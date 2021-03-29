import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Users } from '../shared/user';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  id = this.userService.users.length;
  firstName = '';
  lastName = '';
  email = '';
  age;

  users: Users[];

  constructor(public userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.displayUsers();
    this.interactUsers();
  }

  displayUsers() {
    this.users = this.userService.loadUsers();
  }

  interactUsers() {
    this.userService.getUsers().subscribe((users) => (this.users = [...users]));
  }

  addUser() {
    const user = {
      id: ++this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      age: this.age
    };
    this.userService.addUser(user);
  }

  editUser() {
    const user = {
      id: this.userService.index,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      age: this.age
    };
    this.userService.editUser(user);
  }
}
