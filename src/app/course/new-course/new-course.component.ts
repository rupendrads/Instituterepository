import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormControl } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';

import { iCourse, Course, iSubject, iCourseSubject }from '../models/course.model';
import { iInstitute } from '../../institute/models/institute.model';
import { institutes } from '../../institute/services/data';
import { courses, subjects, courseSubjects } from '../services/data';


@Component({
    selector: 'new-course',
    templateUrl: './new-course.component.html',
    styleUrls: ['./new-course.component.css']
  })
  export class NewCourseComponent implements OnInit {
    @ViewChild('institutename') institutenames!: ElementRef;
    
    @ViewChild('myForm') form!: NgForm;
    
    course: any = {
      courseId: 0,
      courseName: '',
      courseDuration: 0,
      courseFee: 0,
    };
    
    institutes: iInstitute[] = [];
    courses: iCourse[] = [];
    subjects: iSubject[] = [];
    courseSubjects: iCourseSubject[] = [];
    selectedCourse: iCourse|undefined = undefined;
    selectedInstitute: string = '';
    
    selectedSubject: iSubject|any;
    selectedSubjects: iSubject[] = [];
          
    courseId!: number;
    courseName!: string;
    instituteId!: number;
    courseDuration!: number;
    courseFee!: number;
    Ssubjects!: string[];
    //subjectsName!: string;

    constructor(private courseService: CourseService, private route: ActivatedRoute,
      private router:Router) {
    }
    
    ngOnInit(){
      this.institutes = [...institutes];
      this.courses = [...courses]
      this.subjects = [...subjects];   

      this.courseSubjects = [...courseSubjects]; 
      this.courses = this.courseService.getCourses();
      
      //length of Course array ---->
      const obj: iCourse[] = courses;
      const courselength = Object.keys(obj).length;
      console.log("Course array length is" +courselength);
      
      // length of Subjects array ---->
      const obj1: iSubject[] = subjects;
      const subjectlength = Object.keys(obj1).length;
      console.log("Subject array length is" +subjectlength);
    
      //this.BindEditCourse();
}
      
    onSelected():void {
      this.selectedInstitute = this.institutenames.nativeElement.value;
    };
          
    onAdded() {
      if(this.selectedSubject!== undefined && !this.selectedSubjects.includes(this.selectedSubject)){          
          this.selectedSubjects?.push(this.selectedSubject);
      }
    } 

    onDelete() {
      let index = this.selectedSubjects?.indexOf(this.selectedSubject);
      this.selectedSubjects.splice(index, 1);
    }    
   
    onChangeSubject(event:any){
      const selectedSubjectId = event.target.value;
      this.selectedSubject = this.subjects.find(s => s.subjectId == selectedSubjectId);
    }

  
      // BindEditCourse() {
      //   this.courseService.getCourseById(this.courseId).subscribe((data) => {
      //     this.course = {
      //       Id: this.courseId,
      //       name: data.name,
      //       duration: data.duration,
      //       fee: data.fee,
      //     };
      //   });
      // }

    onSubmit() {        
      this.instituteId = +this.selectedInstitute;
      this.courseId = this.course.id;
      console.log(this.form.value);
      this.courseName = this.form.value.courseDetail.coursename;
      this.courseDuration = this.form.value.courseduration;
      this.courseFee = this.form.value.coursefee;
      
      console.log(this.courseDuration);
      console.log(this.courseFee);

      const Ssubjects:string[] = [];
      this.selectedSubjects.map((subject) => {
        Ssubjects.push(subject.subjectName);
      });
      
      this.courseService.addCourse(new Course (
        this.courseId,
        this.courseName,
        this.Ssubjects,
        this.courseDuration, 
        this.courseFee,
    ),Ssubjects).subscribe({
        next: (result:any) => {
          console.log(result);
          this.router.navigateByUrl('/courses');
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
    });  
    
  }  
}


