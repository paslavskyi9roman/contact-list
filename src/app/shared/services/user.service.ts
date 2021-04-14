import { Injectable } from '@angular/core';
import { Users } from '../models/user';
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

  constructor(private firestore: AngularFirestore) { }

  getUser() {
    return this.user;
  }

  sendUser(user) {
    this.user = user;
  }

  clearUser() {
    this.user = null;
  }

  getUsersDoc(id) {
    return this.firestore
      .collection('contacts')
      .doc(id)
      .valueChanges();
  }

  getUserList() {
    return this.firestore
      .collection('contacts')
      .snapshotChanges();
  }

  createUser(user: Users) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('contacts')
        .add(user)
        .then((response) => { console.log(response); }, (error) => reject(error));
    });
  }

  deleteUser(id) {
    return this.firestore
      .collection('contacts')
      .doc(id)
      .delete();
  }

  updateUser(user: Users) {
    return this.firestore
      .collection('contacts')
      .doc(user.id)
      .update({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        age: user.age
      });
  }
}
