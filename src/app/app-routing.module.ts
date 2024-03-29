import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { NewAdmission } from './admission/new-admission/new-admission.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { NewCourseComponent } from './course/new-course/new-course.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { NewSubjectComponent } from './subject/new-subject/new-subject.component';
import { SubjectEditComponent } from './subject/subject-edit/subject-edit.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { RoyaltyPayoutComponent } from './royaltypayout/new-royalty-payout/new-royalty-payout.component';
import { RoyaltyDistributionComponent } from './royaltydistribution/new-royalty-distribution/new-royalty-distribution.component';
import { RoyaltyReportComponent } from './royaltyreport/royalty-report/royalty-report.component';
import { AuthGuard } from './authentication/guards/auth.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'signin', component: SignInComponent },
    { path: 'aboutus', component: AboutUsComponent},
    { path: 'contactus', component: ContactUsComponent },
    { path: 'admission', canActivate:[AuthGuard], component: NewAdmission },
    { path: 'register', component: NewUserComponent},
    { path: 'newcourse', canActivate:[AuthGuard], component: NewCourseComponent},
    { path: 'courses', canActivate:[AuthGuard], component: CourseListComponent},
    { path: 'editcourse/:id', canActivate:[AuthGuard], component: CourseEditComponent},
    { path: 'newsubject', canActivate:[AuthGuard], component: NewSubjectComponent},
    { path: 'subjects', canActivate:[AuthGuard], component: SubjectListComponent},
    { path: 'editsubject/:id', canActivate:[AuthGuard], component: SubjectEditComponent},
    { path: 'profile/:id', canActivate:[AuthGuard], component: EditUserComponent },
    { path: 'royaltydistribution', canActivate:[AuthGuard], component: RoyaltyDistributionComponent},
    { path: 'royaltypayout', canActivate:[AuthGuard], component: RoyaltyPayoutComponent},
    { path: 'royaltyreport', canActivate:[AuthGuard], component: RoyaltyReportComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }