import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
;
import { MatIconModule } from '@angular/material/icon';

import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperModule } from './wrapper/wrapper.module';
import { UserComponent } from './users/user/user.component';

@NgModule({
  declarations: [AppComponent, CreateUserComponent, UsersComponent, WrapperComponent, UserComponent, WrapperComponent],
  imports: [BrowserModule, AppRoutingModule,
    MatIconModule, WrapperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
