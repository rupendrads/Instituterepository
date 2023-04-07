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

import { RoyaltyDistributionComponent } from './royaltydistribution/new-royalty-distribution/new-royalty-distribution.component';
import { SubjectComponent } from './subject/subject.component';
import { NewSubjectComponent } from './subject/new-subject/new-subject.component';
import { SubjectEditComponent } from './subject/subject-edit/subject-edit.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@NgModule({
  declarations: [    
    HomeComponent,
    HeaderComponent,
    NewUserComponent,
    EditUserComponent,
    SignInComponent,    
    NewAdmission,
    AppComponent,
    CourseComponent,
    NewCourseComponent,
    CourseEditComponent,
    CourseListComponent,
    RoyaltyDistributionComponent,
    SubjectComponent,
    NewSubjectComponent,
    SubjectEditComponent,
    SubjectListComponent,
    ConfirmDialogComponent,
    MessageDialogComponent,
    SubjectListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [],  
  providers: [ DatePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
