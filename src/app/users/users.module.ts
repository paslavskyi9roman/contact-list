import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FilterComponent } from './filter/filter.component';
import { UsersComponent } from './users.component';

import { NameTransformPipe } from '../shared/pipes/name-transform.pipe';
import { FilterPipe } from '../shared/pipes/filter.pipe';


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    CreateUserComponent,
    NameTransformPipe,
    FilterComponent,
    FilterPipe],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
