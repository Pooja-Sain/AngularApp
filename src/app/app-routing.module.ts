import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main-content/dashboard/dashboard.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'registeration',component:RegisterationComponent},
 
  {path:'', redirectTo:'login',pathMatch:"full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
