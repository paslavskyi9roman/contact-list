import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../shared/user.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  firstName = ''
  lastName = ''
  email = ''
  age 

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  addUser() {
    const user: User = {
      id: Math.floor(Math.random() * 999),
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      age: this.age,
    };
    this.userService.addUser(user)
  }

}
