import { Injectable } from '@angular/core';
import { Users } from '../models/user';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Users[] = [
    { id: 1, firstName: 'Geralt', lastName: 'of Rivia', email: 'geralt.ofrivia@gmail.com', age: 35 },
    { id: 2, firstName: 'John', lastName: 'Wick', email: 'john.wich@gmail.com', age: 32 },
    { id: 3, firstName: 'Hanzo', lastName: 'Hasashi', email: 'hanzo.hasashi@gmail.com', age: 38 },
    { id: 4, firstName: 'Sub', lastName: 'Zero', email: 'sub.zero@gmail.com', age: 38 },
    { id: 5, firstName: 'Erron', lastName: 'Black', email: 'erron.black@gmail.com', age: 28 }
  ];

  user;

  searchValue;

  private observer = new Subject();

  constructor(private firestore: AngularFirestore) { }

  sendUser(user) {
    this.user = user;
  }

  clearUser() {
    this.user = null;
  }

  getUsersDoc(id) {
    return this.firestore
      .collection('users')
      .doc(id)
      .valueChanges();
  }

  getUserList() {
    return this.firestore
      .collection('users')
      .snapshotChanges();
  }

  createUser(user: Users) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('users')
        .add(user)
        .then((response) => { console.log(response); }, (error) => reject(error));
    });
  }

  deleteUser(id) {
    return this.firestore
      .collection('users')
      .doc(id)
      .delete();
  }

  // updateUser(user: Users, id) {
  //   return this.firestore
  //     .collection('users')
  //     .doc(id)
  //     .update({
  //       firstName,
  //       email: user.email,
  //       age: users.age
  //     });
  // }

  loadUsers() {
    return this.users;
  }

  getUsers(): Observable<any> {
    return this.observer.asObservable();
  }
  findUsers(): Observable<any> {
    return this.observer.asObservable();
  }

  // addUser(user: Users) {
  //   this.users = [...this.users, user];
  //   this.observer.next(this.users);
  // }

  editUser(newUser) {
    this.users = this.users.map((user) => (user.id === newUser.id ? newUser : user));
    this.observer.next(this.users);
  }

  // removeUser(id: number) {
  //   this.users = this.users.filter((u) => u.id !== id);
  //   this.observer.next(this.users);
  // }

  searchName(name) {
    this.searchValue = name;
    console.log(this.searchValue);
    this.observer.next(this.searchValue);
  }
}
