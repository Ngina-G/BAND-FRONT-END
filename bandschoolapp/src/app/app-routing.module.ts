import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { PomodoroComponent } from './modules/home/pages/pomodoro/pomodoro/pomodoro.component';
import { AllNotesComponent } from './modules/home/pages/all-notes/all-notes.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'pomodoro', component: PomodoroComponent},
  {path: 'all-notes', component: AllNotesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
