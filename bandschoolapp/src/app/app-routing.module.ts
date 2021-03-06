import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home/home.component';
import { PomodoroComponent } from './modules/home/pages/pomodoro/pomodoro/pomodoro.component';
import { AllNotesComponent } from './modules/home/pages/all-notes/all-notes.component';
import { AllCategoriesComponent } from './modules/home/pages/all-categories/all-categories.component';
import { AddNoteComponent } from './modules/home/pages/add-note/add-note.component';
import { AddTaskComponent } from './modules/home/pages/add-task/add-task.component';
import { CategoryComponent } from './modules/home/pages/category/category.component';
import { NoteComponent } from './modules/home/pages/note/note.component';
import { EditProfileComponent } from './modules/home/pages/edit-profile/edit-profile.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { RegisterComponent } from './core/authentication/register/register.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'home', component: HomeComponent},
  {path: 'pomodoro', component: PomodoroComponent},
  {path: 'all-notes', component: AllNotesComponent},
  {path: 'all-categories', component: AllCategoriesComponent},
  {path: 'add-note', component: AddNoteComponent},
  {path: 'add-task', component: AddTaskComponent},
  {path: 'note/:id', component: NoteComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
