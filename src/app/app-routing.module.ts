import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistryComponent } from './registry/registry.component';
import { ErrorComponent } from './error/error.component';
import { ReportComponent } from './report/report.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path:'', component:WelcomeComponent},
  { path:'login',component:LoginComponent},
  { path:'report', component: ReportComponent},
  { path:'register', component: RegistryComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
