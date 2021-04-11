import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Users } from '../shared/models/user';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ACTION_TOKEN } from '../shared/constants/modal.constants';
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
    @Inject(ACTION_TOKEN) private config: { [name: string]: ActionsInterface },
    @Inject(MAT_DIALOG_DATA) public data: ModalComponent
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.setConfig();
    this.firstName = this.data.firstName;
    this.lastName = this.data.lastName;
    this.email = this.data.email;
    this.age = this.data.age;
  }


  setConfig() {
    if (this.user) {
      this.formActions = this.config.edit;
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
