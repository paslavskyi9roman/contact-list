import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { Users } from '../shared/user'
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from '../shared/modal.service';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
 
  constructor(public userService: UserService, public dialog: MatDialog, private modalService: ModalService) { }
  
  ngOnInit() {
  }

 
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
