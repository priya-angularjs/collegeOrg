import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {MenuComponent} from './pages/menu/menu.component';
import {StudentComponent} from './students/student/student.component';
import {StudentListComponent} from './students/student-list/student-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: MenuComponent,
  children: [{
    path: 'dashboard', component: DashboardComponent,
  },
    { path: 'students/addStudent', component: StudentComponent},
    {path: 'students/studentsList', component: StudentListComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
