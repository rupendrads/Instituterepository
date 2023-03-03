import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NewAdmission } from './admission/new-admission/new-admission.component';
import { AppComponent } from './app.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';

@NgModule({
  declarations: [    
    NewUserComponent,
    SignInComponent,    
    NewAdmission,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
