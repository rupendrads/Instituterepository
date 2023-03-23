import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';

import { Course, iSubject }from '../models/course.model';
import { iInstitute } from '../../institute/models/institute.model';
import { institutes } from '../../institute/services/data';
import { subjects } from '../services/data';

@Component({
    selector: 'new-course',
    templateUrl: './new-course.component.html',
    styleUrls: ['./new-course.component.css']
  })
  export class NewCourseComponent implements OnInit {
    @ViewChild('myForm') form!: NgForm;
               
    institutes: iInstitute[] = [];
    selectedInstitute: string = '';
    
    subjects: iSubject[] = [];    
    selectedSubject: iSubject|any;
    selectedSubjects: iSubject[] = [];

    royaltyTypes: string[] = [];
    royaltyType:string|undefined = undefined;
          
    constructor(private courseService: CourseService, private route: ActivatedRoute,
      private router:Router) {       
        this.royaltyTypes = ["Percentage", "Amount"];
    }
    
    ngOnInit(){
       this.institutes = [...institutes];  
       this.subjects = [...subjects];   
    }
      
    onInstituteChanged(event: any):void {
      this.selectedInstitute = event.target.value;
    };
          
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

    onSubmit() {      
      const course = new Course(
        this.form.value.courseId,
        this.form.value.coursename,
        +this.selectedInstitute,
        this.form.value.courseduration,
        this.form.value.coursefee,
        this.royaltyType,
        this.form.value.royaltyvalue,
        this.selectedSubjects
      );
      console.log(course);

      this.courseService.addCourse(course).subscribe({
        next: (result) => {
          console.log(result);
          this.router.navigateByUrl('/courses');
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      });
    }  

    onChangeRoyaltyType(event: any){
      console.log(event.target.value);
      this.royaltyType = event.target.value;
    }
}


