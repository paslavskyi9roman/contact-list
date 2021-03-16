import { Injectable } from '@angular/core';
import { Users } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: Users[] = [
    {id: 1,firstName: 'Geralt', lastName: 'of Rivia', email: 'geralt.ofrivia@gmail.com', age: 35},
    {id: 2,firstName: 'John', lastName: 'Wick', email: 'john.wich@gmail.com', age: 32},
    {id: 3,firstName: 'Hanzo', lastName: 'Hasashi', email: 'hanzo.hasashi@gmail.com', age: 38},
  ]
  
  constructor() { }
  
  addUser(user: Users) {
    this.users.push(user)
  }

  removeUser(id: number) {
    this.users = this.users.filter(u => u.id !== id)
  }
}
