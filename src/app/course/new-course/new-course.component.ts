import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { SubjectService } from 'src/app/subject/services/subject.service';
import { MessageDialogService } from 'src/app/message-dialog/message-dialog.service'; 

import { Course, iSubject }from '../models/course.model';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { InstituteService } from 'src/app/institute/services/institute.service';

@Component({
    selector: 'new-course',
    templateUrl: './new-course.component.html',
    styleUrls: ['./new-course.component.css']
  })
  export class NewCourseComponent implements OnInit {
    @ViewChild('myForm') form!: NgForm;
               
    instituteId: number;
    instituteName:string = "";
    
    subjects: iSubject[] = [];    
    selectedSubject: iSubject|any;
    selectedSubjects: iSubject[] = [];

    royaltyTypes: string[] = [];
    royaltyType:string|undefined = undefined;
          
    constructor(private courseService: CourseService,
      private subjectService: SubjectService, 
      private messageDialogService: MessageDialogService, 
      private route: ActivatedRoute, private router:Router,
      private authService: AuthService, 
      private instituteService: InstituteService) {       
        this.royaltyTypes = ["Percentage", "Amount"];
        this.instituteId = this.authService.loggedInUserInstituteId!;
    }
    
   ngOnInit(): void {
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
         this.getSubjectList(this.instituteId);    
   }

          
   onAddSubject() {
      if(this.selectedSubject!== undefined && !this.selectedSubjects.includes(this.selectedSubject)){          
        this.selectedSubjects?.push(this.selectedSubject);
      }          
   } 

   onDeleteSubject() {
      let index = this.selectedSubjects?.indexOf(this.selectedSubject);
      this.selectedSubjects.splice(index, 1);
   }    
       
   onChangeSubject(event:any){
      const selectedSubjectId = event.target.value;
      this.selectedSubject = this.subjects.find(s => s.subjectId == selectedSubjectId);
   }

   onChangeRoyaltyType(event: any){
      console.log(event.target.value);
      this.royaltyType = event.target.value;
   }

   getSubjectList(instituteId:number) :void {
		this.subjectService.getSubjects(instituteId).subscribe({
			next: (result: any) => {
				console.log(result);
				this.subjects = result;
				console.log(this.subjects);          
			},
			error: (e) => console.log(e),
			complete: () => console.log("Complete")
		});
	}

   onSubmit() {     
      if(this.instituteId){ 
         const course = new Course(
            this.form.value.courseId,
            this.form.value.coursename,
            this.instituteId,
            this.form.value.courseduration,
            this.form.value.coursefee,
            this.royaltyType,
            this.form.value.royaltyvalue,
            this.selectedSubjects
            );
            console.log(course);

         this.messageDialogService.okThis("New Course Added !",  () => {

            this.courseService.addCourse(course).subscribe({
               next: (result) => {
                  console.log(result);
                  this.router.navigateByUrl('/courses');
               },
               error: (e) => console.error(e),
               complete: () => console.info('complete') 
            });
               console.log(`Ok Clicked`);  
         });
      }
   }  
}


