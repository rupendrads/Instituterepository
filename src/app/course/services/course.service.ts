import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../course/models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get("http://localhost:5032/api/Course");
  }
  
  addCourse(course: Course) {
    console.log(course);
    return this.http.post("http://localhost:5032/api/Course", course);  
  }
}

 