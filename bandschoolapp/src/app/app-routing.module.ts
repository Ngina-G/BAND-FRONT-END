import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { PomodoroComponent } from './modules/home/pages/pomodoro/pomodoro/pomodoro.component';
import { AllNotesComponent } from './modules/home/pages/all-notes/all-notes.component';
import { AllCategoriesComponent } from './modules/home/pages/all-categories/all-categories.component';
import { AllTasksComponent } from './modules/home/pages/all-tasks/all-tasks.component';
import { AddNoteComponent } from './modules/home/pages/add-note/add-note.component';
import { AddCategoryComponent } from './modules/home/pages/add-category/add-category.component';
import { AddTaskComponent } from './modules/home/pages/add-task/add-task.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'pomodoro', component: PomodoroComponent},
  {path: 'all-notes', component: AllNotesComponent},
  {path: 'all-categories', component: AllCategoriesComponent},
  {path: 'all-tasks', component: AllTasksComponent},
  {path: 'add-note', component: AddNoteComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'add-task', component: AddTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
