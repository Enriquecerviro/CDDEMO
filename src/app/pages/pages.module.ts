import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { SettingsComponent } from './settings/settings.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

import { ClarityModule } from '@clr/angular';
//IMPORTAMOS DATASERVICE
import { DataService } from './data.service';


//DECLARAMOS UN ARRAY DE LOS COMPONENTES DE 'PAGES'
const components  = [
  DashboardComponent,
  PostsComponent,
  SettingsComponent,
  TodosComponent,
  UsersComponent,
];
@NgModule({
  declarations: [
    DashboardComponent,
    PostsComponent,
    SettingsComponent,
    TodosComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClarityModule, 
  ],
  exports: [
    DashboardComponent,
    PostsComponent,
    SettingsComponent,
    TodosComponent,
    UsersComponent,
  ],
  providers: [
    DataService
  ]
 
})
export class PagesModule { }
