import { Component, OnInit } from "@angular/core";
import { iCourse, iSubject } from '../../course/models/course.model';
import { iInstitute } from '../../institute/models/institute.model';
import { institutes } from '../../institute/services/data';
import { User } from "src/app/user/models/user.model";
import { UserService } from "src/app/user/services/user.service";
import { AuthService } from "../../authentication/services/auth.service";
import { Admission } from "../models/admission.model";
import { AdmissionService } from "../services/admission.service";
import { Router } from "@angular/router";
import { CourseService } from "src/app/course/services/course.service";
import { InstituteService } from "src/app/institute/services/institute.service";

@Component({
    selector: 'new-admission',
    templateUrl: './new-admission.component.html',
    styleUrls: ['./new-admission.component.css']
  })
  export class NewAdmission implements OnInit {
      institutes: iInstitute[] = [];
      courses: iCourse[] = [];
      selectedCourse: iCourse|undefined = undefined;
      selectedSubjects: iSubject[]|undefined = undefined;
      refUsers: User[] = [];
      anyReferral: boolean = false;
      admission: Admission;
      instituteId: number|undefined;
      instituteName:string = "";

      constructor(private userService: UserService,
        private authService: AuthService,
        private admissionService: AdmissionService,
        private courseService: CourseService,
        private instituteService: InstituteService,
        private router: Router){
          this.admission = new Admission();
          this.admission.userId = this.authService.loggedInUserId;
          this.instituteId = this.authService.loggedInUserInstituteId;
      }

      ngOnInit(){
        this.institutes = [...institutes];
        if(this.instituteId!== undefined){
          this.instituteService.getInstitute(this.instituteId).subscribe({
            next: (result:any) => {
              console.log(result);
              this.instituteName = result.name;
            },
            error: (e) => console.log(e),
            complete: () => console.log("completed")
          });
        }
        
        this.courseService.getCourses().subscribe({
          next: (result:any) => {
            console.log(result);
            this.courses = result;
          },
          error: (e) => console.log(e),
          complete: () => console.log("completed")
        })
        
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

      onChangeCourse(event:any){
        console.log(event.target.value);
        const selectedCourseId = event.target.value; 
        this.admission.courseId = selectedCourseId;       
        this.selectedCourse = this.courses.find(c => c.courseId == selectedCourseId);
        this.selectedSubjects = this.selectedCourse?.subjects;
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
