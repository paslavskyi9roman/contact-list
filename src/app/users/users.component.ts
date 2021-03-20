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


}

// ✔ винести юзер інтерфейс з сервісу
// ❌ розбити юзера на окремий компонент
// ✔ не мапати з юзерсервісу 
