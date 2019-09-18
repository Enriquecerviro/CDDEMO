import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { SettingsComponent } from './settings/settings.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [DashboardComponent, PostsComponent, SettingsComponent, TodosComponent, UsersComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
