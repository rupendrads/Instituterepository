import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NewAdmission } from './admission/new-admission/new-admission.component';
import { AppComponent } from './app.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { NewCourseComponent } from './course/new-course/new-course.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [    
    HeaderComponent,
    NewUserComponent,
    EditUserComponent,
    SignInComponent,    
    NewAdmission,
    HomeComponent,
    AppComponent,
    CourseComponent,
    NewCourseComponent,
    CourseEditComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
