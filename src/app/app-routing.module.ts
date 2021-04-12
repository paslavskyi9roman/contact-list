import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthGuard } from './shared/auth.guard';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
