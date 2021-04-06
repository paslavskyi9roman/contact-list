import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MatIconModule } from '@angular/material/icon';
import { CreateUserComponent } from './create-user/create-user.component';
import { FilterComponent } from './filter/filter.component';
import { UsersComponent } from './users.component';
import { NameTransformPipe } from './user/name-transform.pipe';


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    CreateUserComponent,
    NameTransformPipe,
    FilterComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
