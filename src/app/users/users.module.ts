import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MatIconModule } from '@angular/material/icon';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    CreateUserComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [UsersComponent]
})
export class UsersModule {}
