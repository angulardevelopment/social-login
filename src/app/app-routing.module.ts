import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { LoginComponent } from './login/login.component';
import { NgxtensionComponent } from './ngxtension/ngxtension.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'Linkedin', component: LinkedinComponent},
  {path: 'NgxtensionComponent', component: NgxtensionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
