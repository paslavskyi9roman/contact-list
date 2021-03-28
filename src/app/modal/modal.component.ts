import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { Users } from '../shared/user'
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  id = this.userService.users.length
  firstName = ''
  lastName = ''
  email = ''
  age 

  constructor(public userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
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

  editUser() {
    console.log('UDPT')
  }
}
