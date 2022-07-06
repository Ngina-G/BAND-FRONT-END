import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PomodoroComponent } from './modules/home/pages/pomodoro/pomodoro/pomodoro.component';
import { HomeComponent } from './modules/home/home/home.component';
import { AllCategoriesComponent } from './modules/home/pages/all-categories/all-categories.component';
import { AllNotesComponent } from './modules/home/pages/all-notes/all-notes.component';
import { AddNoteComponent } from './modules/home/pages/add-note/add-note.component';
import { AddTaskComponent } from './modules/home/pages/add-task/add-task.component';
import { NoteComponent } from './modules/home/pages/note/note.component';
import { CategoryComponent } from './modules/home/pages/category/category.component';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TaskbarhomepageComponent } from './modules/home/components/taskbarhomepage/taskbarhomepage.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MarkdownEditorModule } from './modules/module/markdown-editor/markdown-editor.module';
import { MarkdownEditorOptions } from './modules/module/markdown-editor/mark-down-editor-options';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    FontAwesomeModule,
    MarkdownEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
 }
