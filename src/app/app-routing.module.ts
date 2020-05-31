import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  // {path: '**', component: DashboardComponent}

  {path: 'create-user', component: CreateUserComponent},
  {path: 'list-user', component: ListUserComponent},
  {path: 'view-user/:id', component: ViewUserComponent},
  {path: 'edit-user/:id', component: EditUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
