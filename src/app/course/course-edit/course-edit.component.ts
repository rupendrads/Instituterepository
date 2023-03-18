import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormControl, FormGroup} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

import { CourseService } from '../services/course.service';
import { iCourse, Course, iSubject, iCourseSubject }from '../models/course.model';
import { iInstitute } from '../../institute/models/institute.model';
import { institutes } from '../../institute/services/data';
import { courses, subjects, courseSubjects } from '../services/data';

@Component({
  selector: 'editcourse',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

    
  
  @ViewChild('myForm') form!: NgForm;
  
  course!: iCourse;
  courseId!: string;
  institutename: string = '';
  
  institutes: iInstitute[] = [];
  courses: iCourse[] = [];
  subjects: iSubject[] = [];
  courseSubjects: iCourseSubject[] = [];
  selectedCourse: iCourse|undefined = undefined;
  selectedInstitute: iInstitute|undefined = undefined;
  selectedInstituteId: number|undefined = undefined;
  
  selectedSubject: iSubject|any;
  selectedSubjects: iSubject[] = [];
          
    //courseName!: string;
    //instituteId!: number;
    //courseDuration!: number;
    //courseFee!: number;
    //Ssubjects!: string[];

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.institutes = [...institutes];
     console.log(institutes);

     this.courses = [...courses]
     this.subjects = [...subjects];   

     this.courseSubjects = [...courseSubjects]; 
     this.courses = this.courseService.getCourses();
    
    //  length of Course array ---->
     const obj: iCourse[] = courses;
     const courselength = Object.keys(obj).length;
    
     // length of Subjects array ---->
     const obj1: iSubject[] = subjects;
     const subjectlength = Object.keys(obj1).length;

   // this.institutename = this.institutes.nativeElement.value;
     
    let courseId = this.route.snapshot.paramMap.get('id');
    //this.course = courses.find(c => c.id == courseId);
    
    console.log(courseId);
    if(courseId !=null) {
      //this.courseId = courseId;
       this.courseService.onGetCourse(+courseId).subscribe({
          next: (result: any) => {
          
          console.log(result);
         // console.log(this.instituteId);
          
              this.form.control.patchValue({courseId: result.courseId});
              console.log(this.courseId);
              this.form.control.patchValue({courseName: result.courseName}); 
               
              this.form.control.patchValue({instituteId: result.instituteId});  
              this.form.control.patchValue({Ssubjects: result.Ssubjects});  
              this.form.control.patchValue({courseDuration: result.courseDuration});
              this.form.control.patchValue({courseFee: result.courseFee});
        },
          error: (e) => console.log(e),
          complete: () => console.log("Complete"),
        
      });
    }
  }

  
  onSelected():void {
    //this.selectedInstitute = this.institutenames.nativeElement.value;
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


  onSubmit() {        
      // this.instituteId = this.selectedInstitute.instituteId;
      
      console.log(this.form);
     
      const Ssubjects:string[] = [];
      this.selectedSubjects.map((subject) => {
        Ssubjects.push(subject.subjectName);
      });
    
    if(this.courseId !== undefined){
      this.courseService.updateCourse(
          this.courseId,
          this.form.value.courseName,
          this.form.value.instituteId, 
          this.form.value.Ssubjects, 
          this.form.value.courseDuration,
          this.form.value.courseFee,
          ).subscribe({
              next: (result: any) => {
                console.log(result);
                this.router.navigateByUrl('/courses');        
          },
              error: (e: any) => console.error(e),
              complete: () => {
                  console.info('complete') 
          }
      }); 
    }
  }  
}

