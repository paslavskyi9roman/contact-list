import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  constructor(public userService: UserService, public modalService: ModalService) { }

  ngOnInit() { }

  openDialog() {
    this.modalService.openDialog();
  }
}
