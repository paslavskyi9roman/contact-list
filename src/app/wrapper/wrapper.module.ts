import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from '../users/users.module';
import { ModalModule } from '../modal/modal.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersModule,
    ModalModule
  ]
})
export class WrapperModule { }
