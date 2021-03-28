import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { Users } from '../shared/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users: Users[];

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.displayUsers()
    this.interactUsers()
  }

  displayUsers() {
    this.users = this.userService.loadUsers()
  }
  
  interactUsers() {
    this.userService.getUsers()
    .subscribe(users => this.users = [...users])
  }

  removeUser(id: number) { 
    this.userService.removeUser(id)
  }
}
