import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NewAdmission } from './admission/new-admission/new-admission.component';
import { AppComponent } from './app.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { NewCourseComponent } from './course/new-course/new-course.component';
import { NewCourseEditComponent } from './course/new-course/new-course-edit/new-course-edit.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [    
    AppComponent,
    NewUserComponent,
    SignInComponent,    
    NewAdmission,
    CourseComponent,
    NewCourseComponent,
    NewCourseEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
