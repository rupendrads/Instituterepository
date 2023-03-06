import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NewAdmission } from './admission/new-admission/new-admission.component';
import { AppComponent } from './app.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [    
    HeaderComponent,
    NewUserComponent,
    SignInComponent,    
    NewAdmission,
    HomeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
