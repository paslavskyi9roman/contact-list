import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { Users } from '../shared/user'
import { ModalService } from '../shared/modal.service';

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
  id = this.userService.users.length

  constructor(public userService: UserService, private modalService: ModalService) { }
  
  ngOnInit() {
  }

  addUser() {
    const user: Users = {
      id: ++this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      age: this.age,
    };
     this.userService.addUser(user)
  }

  open(content) {
    this.modalService.open(content)
  }
}
