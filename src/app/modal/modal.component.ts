import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Users } from '../shared/user';
import { MatDialog } from '@angular/material/dialog';
import { ACTION_TOKEN } from '../constants/modal.constants';
import { ActionsInterface } from '../shared/actions';
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

  user: Users[];

  formActions: ActionsInterface;

  constructor(
    public userService: UserService,
    public dialog: MatDialog,
    @Inject(ACTION_TOKEN) private config: { [name: string]: ActionsInterface }
  ) {}

  ngOnInit(): void {
    this.user = this.userService.user;
    this.displayUsers();
    this.interactUsers();
    this.setConfig();
  }

  displayUsers() {
    this.users = this.userService.loadUsers();
  }

  interactUsers() {
    this.userService.getUsers().subscribe((users) => (this.users = [...users]));
  }

  setConfig() {
    if (this.user) {
      this.formActions = this.config.edit;
      console.log(this.user);
    } else {
      this.formActions = this.config.add;
    }
  }

  addUser() {
    if (!this.user) {
      const user = {
        id: ++this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        age: this.age
      };
      this.userService.addUser(user);
    } else {
      this.editUser();
    }
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
