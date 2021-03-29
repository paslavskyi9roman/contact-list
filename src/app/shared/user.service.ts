import { Injectable } from '@angular/core';
import { Users } from './user';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: Users[] = [
    { id: 1, firstName: 'Geralt', lastName: 'of Rivia', email: 'geralt.ofrivia@gmail.com', age: 35 },
    { id: 2, firstName: 'John', lastName: 'Wick', email: 'john.wich@gmail.com', age: 32 },
    { id: 3, firstName: 'Hanzo', lastName: 'Hasashi', email: 'hanzo.hasashi@gmail.com', age: 38 },
    { id: 4, firstName: 'Sub', lastName: 'Zero', email: 'sub.zero@gmail.com', age: 38 },
    { id: 5, firstName: 'Hanzo', lastName: 'Hasashi', email: 'hanzo.hasashi@gmail.com', age: 38 },
  ];

  index;

  private observer = new Subject();

  constructor() {}

  sendId(index) {
    this.index = index;
    this.observer.next(this.users);
  }

  loadUsers() {
    return this.users;
  }

  getUsers(): Observable<any> {
    return this.observer.asObservable();
  }

  addUser(user: Users) {
    this.users = [...this.users, user];
    this.observer.next(this.users);
  }

  editUser(newUser) {
    this.users = this.users.map((user) => (user.id === newUser.id ? newUser : user));
    // this.users = this.users.map((user) => {
    //   if (user.id === newUser.id) {
    //     return newUser
    //   } return user
    // } )

    this.observer.next(this.users);
  }

  removeUser(id: number) {
    this.users = this.users.filter((u) => u.id !== id);
    this.observer.next(this.users);
  }
}
