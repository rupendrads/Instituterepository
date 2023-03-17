import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

import { iCourse, Course, iSubject }from '../models/course.model';
import { iInstitute } from '../../institute/models/institute.model';
import { institutes } from '../../institute/services/data';
//import { courses, subjects, courseSubjects } from '../services/data';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  courseId: number = 0;
  course: any = {
    id: 0,
    name: '',
    duration: 0,
    fee: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){}
}
