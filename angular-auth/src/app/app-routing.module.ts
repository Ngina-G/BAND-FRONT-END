import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AngieApiComponent } from './angie-api/angie-api.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import { OneNoteComponent } from './one-note/one-note.component';
import { ProfileComponent } from './profile/profile.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component:AngieApiComponent},
  {path:'profile', component:ProfileComponent},
  {path:'oneNote/:id', component:OneNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
