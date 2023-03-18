import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { iCourse, Course, iSubject, iCourseSubject }from '../models/course.model';
import { courses, subjects, courseSubjects } from '../services/data';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
   @ViewChild('Form') form!: NgForm;
 
  courses: iCourse[] = [];
  subjects: iSubject[] = [];
  selectedCourse!: iCourse[];
  selectedSubjects: iSubject[] = [];
  courseSubjects: iCourseSubject[] = [];
  
  course!: Course[];

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(result => {
      //this.course = result;
      console.log(result);      
    });
    
    this.selectedCourse = [...courses];
    this.subjects = [...subjects];
    this.courseSubjects = [...courseSubjects];
   
  }
  subjectsBind(id: number){
    const selectedSubjectIds = this.courseSubjects.filter(cs => cs.courseId == id);
    
    const selectedSubjects: iSubject[] = [];
    selectedSubjectIds.forEach(element => {
      const subject = this.subjects.find(s => s.subjectId == element.subjectId);
      if(subject !== undefined){
        selectedSubjects?.push(subject);
      }
    });
      let courseSubjectNames:string[] = []; 
        selectedSubjects.map(subject => {
      courseSubjectNames.push(subject.subjectName);
    });
    return courseSubjectNames;
  }
   onEditCourse(id: any, index: number) {
     console.log(this.courses[index].courseName);
      this.router.navigateByUrl('/editcourse',course.courseId);
   }

  onDeleteCourse(id: number) {
    // let index = this.selectedSubjects?.indexOf(this.selectedSubject);
    // this.selectedSubjects.splice(index, 1);
    this.courseService.onDeleteCourse(id);
  } 
  
   
  onClickNewCourse(){
    this.router.navigateByUrl('/newcourse');
  };
}
  
