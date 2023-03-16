import { Component, OnInit } from "@angular/core";
import { iCourse, iSubject, iCourseSubject } from '../../course/models/course.model';
import { iInstitute } from '../../institute/models/institute.model';
import { institutes } from '../../institute/services/data';
import { courses, subjects, courseSubjects } from '../../course/services/data';
import { User } from "src/app/user/models/user.model";
import { UserService } from "src/app/user/services/user.service";
import { AuthService } from "../../authentication/services/auth.service";
import { Admission } from "../models/admission.model";
import { AdmissionService } from "../services/admission.service";
import { Router } from "@angular/router";

@Component({
    selector: 'new-admission',
    templateUrl: './new-admission.component.html',
    styleUrls: ['./new-admission.component.css']
  })
  export class NewAdmission implements OnInit {
      institutes: iInstitute[] = [];
      courses: iCourse[] = [];
      subjects: iSubject[] = [];
      courseSubjects: iCourseSubject[] = [];
      selectedCourse: iCourse|undefined = undefined;
      selectedSubjects: iSubject[]|undefined = undefined;
      refUsers: User[] = [];
      anyReferral: boolean = false;
      admission: Admission;

      constructor(private userService: UserService,
        private authService: AuthService,
        private admissionService: AdmissionService,
        private router: Router){
          this.admission = new Admission();
          this.admission.userId = this.authService.loggedInUserId;
      }

      ngOnInit(){
        this.institutes = [...institutes];
        this.subjects = [...subjects];      
        this.courseSubjects = [...courseSubjects];  
        console.log(this.institutes);
        console.log(this.subjects);
        console.log(this.courseSubjects);
        
        this.userService.getUsers().subscribe({
          next: (result: any) => {   
            console.log(result);            
            console.log(this.authService.loggedInUserId);
            this.refUsers = [...result];
            this.refUsers = [...this.refUsers.filter(user => user.id!= this.authService.loggedInUserId)];
            console.log(this.refUsers);
          },
          error: (e) => console.log(e),
          complete: () => console.log("Complete")
        });
      }

      onChangeInstitute(event:any){
        console.log(event.target.value);
        const selectedInstitueId = event.target.value;
        this.admission.instituteId = selectedInstitueId;
        this.courses = courses.filter(c => c.instituteId == selectedInstitueId);
        console.log(this.courses);
        this.selectedCourse = undefined;
        this.selectedSubjects = [];
      }

      onChangeCourse(event:any){
        console.log(event.target.value);
        const selectedCourseId = event.target.value; 
        this.admission.courseId = selectedCourseId;       
        this.selectedCourse = this.courses.find(c => c.id == selectedCourseId);
        const selectedSubjectIds = this.courseSubjects.filter(cs => cs.courseId == selectedCourseId);
        console.log(selectedSubjectIds);

        this.selectedSubjects = [];
        selectedSubjectIds.forEach(element => {
          const subject = this.subjects.find(s => s.id == element.subjectId);
          if(subject !== undefined){
            this.selectedSubjects?.push(subject);
          }
        });
        console.log(this.selectedSubjects);
      }

      onChangeReferral(event:any){
        console.log(event.target.value);
        this.admission.refId = event.target.value;
      }

      onIsRefChange(event: any){
        console.log(event.target.value);
        this.anyReferral = event.target.value === "Y"? true: false;
      }

      onClickEnroll(){
        console.log(this.admission);
        this.admissionService.addAadmission(this.admission).subscribe({
          next: (result) => {
            console.log(result);
            this.router.navigateByUrl('/home');           
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete') 
        });
      }      
  }
