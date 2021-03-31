import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ACTION_CONFIG, ACTION_TOKEN } from './constants/modal.constants';

@NgModule({
  declarations: [AppComponent, CreateUserComponent, UsersComponent, WrapperComponent, UserComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, BrowserAnimationsModule, MatDialogModule, MatIconModule],
  providers: [{ provide: ACTION_TOKEN, useValue: ACTION_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule {}
