import { Injectable } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: User[] = [
    {id: 1,firstName: 'Geralt', lastName: 'of Rivia', email: 'geralt.ofrivia@gmail.com', age: 35},
    {id: 2,firstName: 'John', lastName: 'Wick', email: 'john.wich@gmail.com', age: 32},
    {id: 3,firstName: 'Hanzo', lastName: 'Hasashi', email: 'hanzo.takashi@gmail.com', age: 38},
  ]

  constructor() { }

  addUser(user: User) {
    this.users.push(user)
  }
}
