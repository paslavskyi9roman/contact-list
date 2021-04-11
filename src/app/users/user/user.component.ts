import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Users } from '../../shared/models/user';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: Users;

  constructor(public userService: UserService, public modalService: ModalService) { }

  ngOnInit() {
  }

  removeUser = (id: number) => {
    this.userService.deleteUser(id);
  };

  openDialog(user) {
    this.userService.sendUser(user);
    this.modalService.openDialog();
  }
}
