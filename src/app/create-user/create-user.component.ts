import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'
import {Users} from '../shared/user'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  firstName = ''
  lastName = ''
  email = ''
  age 

  constructor(public userService: UserService, private modalService: NgbModal) { }
  
  ngOnInit(): void {
  }

  addUser() {
    const user: Users = {
      id: Math.floor(Math.random() * 999),
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      age: this.age,
    };
     this.userService.addUser(user)
  }

  closeResult: string;

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
