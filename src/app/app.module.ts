import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './users/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { ACTION_CONFIG, ACTION_TOKEN } from './constants/modal.constants';
import { WrapperModule } from './wrapper/wrapper.module';

@NgModule({
  declarations: [AppComponent, CreateUserComponent, UsersComponent, WrapperComponent, UserComponent, WrapperComponent],
  imports: [BrowserModule, AppRoutingModule,
    NgbModule,  BrowserAnimationsModule, MatIconModule, WrapperModule],
  providers: [{ provide: ACTION_TOKEN, useValue: ACTION_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule {}
