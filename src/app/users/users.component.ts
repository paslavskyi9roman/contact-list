import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void { 
  }

  removeUser(id: number) { 
    this.userService.removeUser(id)
  }

}

// винести юзер інтерфейс з сервісу
// розбити юзерів на окремий компонент
// не мапати з юзерсервісу
