import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModule } from '../users/users.module';
import { ModalModule } from '../modal/modal.module';
import { WrapperComponent } from './wrapper.component';

import { ACTION_CONFIG, ACTION_TOKEN } from '../constants/modal.constants';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [WrapperComponent],
  imports: [
    CommonModule,
    UsersModule,
    ModalModule,
    NgbModule,
    BrowserAnimationsModule

  ],
  providers: [{ provide: ACTION_TOKEN, useValue: ACTION_CONFIG }],
  exports: [WrapperComponent]
})
export class WrapperModule {}
