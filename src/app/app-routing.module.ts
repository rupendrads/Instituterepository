import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { NewAdmission } from './admission/new-admission/new-admission.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './user/new-user/new-user.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    { path: 'signin', component: SignInComponent },
    { path: 'admission', component: NewAdmission },
    { path: 'register', component: NewUserComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }