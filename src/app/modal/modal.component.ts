import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Users } from '../shared/models/user';
import { MatDialog } from '@angular/material/dialog';
import { ACTION_TOKEN } from '../constants/modal.constants';
import { ActionsInterface } from '../shared/models/actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  myForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    age: new FormControl('', Validators.required)
  });

  constructor(
    public userService: UserService,
    public dialog: MatDialog,
    @Inject(ACTION_TOKEN) private config: { [name: string]: ActionsInterface }
  ) { }

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
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        age: this.age
      };
      this.userService.createUser(user);
    } else {
      this.editUser();
    }
  }

  editUser() {
    const user = {
      id: this.userService.user.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      age: this.age
    };
    this.userService.updateUser(user);
  }
}
