import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModule } from '../users/users.module';
import { ModalModule } from '../components/modal/modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WrapperComponent } from './wrapper.component';

import { ACTION_CONFIG, ACTION_TOKEN } from '../shared/constants/modal.constants';
import { AboutComponent } from '../pages/about/about.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { AuthModule } from '../components/auth/auth.module';


@NgModule({
  declarations: [WrapperComponent, AboutComponent, HeaderComponent],
  imports: [
    CommonModule,
    UsersModule,
    AppRoutingModule,
    ModalModule,
    AuthModule,
    NgbModule,
    BrowserAnimationsModule

  ],
  providers: [{ provide: ACTION_TOKEN, useValue: ACTION_CONFIG }],
  exports: [WrapperComponent]
})
export class WrapperModule { }
