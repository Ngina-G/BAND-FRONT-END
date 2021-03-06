import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PomodoroComponent } from './modules/home/pages/pomodoro/pomodoro/pomodoro.component';
import { HomeComponent } from './modules/home/home/home.component';
import { AllCategoriesComponent } from './modules/home/pages/all-categories/all-categories.component';
import { AllNotesComponent } from './modules/home/pages/all-notes/all-notes.component';
import { AddNoteComponent } from './modules/home/pages/add-note/add-note.component';
import { AddTaskComponent } from './modules/home/pages/add-task/add-task.component';
import { NoteComponent } from './modules/home/pages/note/note.component';
import { CategoryComponent } from './modules/home/pages/category/category.component';
import { EditProfileComponent } from './modules/home/pages/edit-profile/edit-profile.component';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TaskbarhomepageComponent } from './modules/home/components/taskbarhomepage/taskbarhomepage.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngieApiComponent } from './core/http/angie-api/angie-api.component';
import { RegisterComponent } from './core/authentication/register/register.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { LiveService } from './shared/live.service';
import { ApiService } from './core/services/api.service';
import { EditNoteComponent } from './modules/home/pages/edit-note/edit-note.component';
import { EditTaskComponent } from './modules/home/pages/edit-task/edit-task.component';



@NgModule({
  declarations: [
    AppComponent,
    PomodoroComponent,
    HomeComponent,
    NavbarComponent,
    TaskbarhomepageComponent,
    AddNoteComponent,
    AddTaskComponent,
    AllCategoriesComponent,
    AllNotesComponent,
    NoteComponent,
    CategoryComponent,
    EditProfileComponent,
    AngieApiComponent,
    RegisterComponent,
    LoginComponent,
    EditNoteComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    LiveService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
 }
