import { Injectable, EventEmitter } from '@angular/core';
import { Course } from '../course-models/course.model'; 

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courceSelected = new EventEmitter<Course>();
 
  private courses: Course[] = [
      new Course(1, 4, '3d Animation', '3dMax, maya', 6, 10000 ),
      new Course(2, 5, 'Compositing', 'AfterEffects, Photoshop', 4, 8000 )
  ];
  

  constructor() {}

  addCourse(course: Course) {    
    this.courses.push(course);
    console.log(this.courses);
  }

}
