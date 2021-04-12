import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;

  constructor() { }

  logIn() {
    this.isLoggedIn = true;
    console.log('true');
  }
}
