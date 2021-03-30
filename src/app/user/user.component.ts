import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Users } from '../shared/user';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: Users;

  constructor(public userService: UserService, public modalService: ModalService) {}

  ngOnInit() {}

  removeUser(id: number) {
    this.userService.removeUser(id);
  }

  openDialog(id) {
    this.modalService.openDialog();
    this.userService.sendId(id);
  }
}
