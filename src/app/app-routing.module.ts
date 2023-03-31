import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router'; 
import { NewAdmission } from './admission/new-admission/new-admission.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { NewCourseComponent } from './course/new-course/new-course.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { NewSubjectComponent } from './subject/new-subject/new-subject.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { SubjectEditComponent } from './subject/subject-edit/subject-edit.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'signin', component: SignInComponent },
    { path: 'admission', component: NewAdmission },
    { path: 'register', component: NewUserComponent},
    { path: 'newcourse', component: NewCourseComponent},
    { path: 'courses', component: CourseListComponent},
    { path: 'editcourse/:id', component: CourseEditComponent},
    { path: 'newsubject', component: NewSubjectComponent},
    { path: 'subjects', component: SubjectListComponent},
    { path: 'editsubject/:id', component: SubjectEditComponent},
    { path: 'profile/:id', component: EditUserComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }