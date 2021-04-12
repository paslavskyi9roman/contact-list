import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(public dialog: MatDialog, public userService: UserService) { }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: this.userService.getUser()
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      return this.userService.clearUser();
    });
  }
}
