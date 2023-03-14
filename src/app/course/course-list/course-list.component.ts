import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { iCourse, Course, iSubject, iCourseSubject }from '../models/course.model';
import { iInstitute } from '../../institute/models/institute.model';
import { institutes } from '../../institute/services/data';
import { courses, subjects, courseSubjects } from '../services/data';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseList!: iCourse[];
  selectedSubjects: iSubject[] = [];

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {

    this.courseList = [...courses];
    this.selectedSubjects = [...this.selectedSubjects];  
    //console.log(this.courseList);
    console.log(this.selectedSubjects);

  }
  
  onClickNewCourse(){
    this.router.navigateByUrl('/newcourse');
  };
}
  
