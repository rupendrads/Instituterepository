import { Component, OnInit } from '@angular/core';
import { Course } from './course-models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  newcourses!: Course[];

  constructor() {}

  ngOnInit() {}

  onCourseAdded(Course: Course) {
    this.newcourses.push(Course);
    console.log(this.newcourses);
  }
}
