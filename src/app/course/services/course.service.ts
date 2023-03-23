import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course, iSubject } from '../../course/models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService implements OnInit{

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  getCourses() {
    return this.http.get("http://localhost:5032/api/Course");
  }

  getCourse(courseId: string){
    return this.http.get(`http://localhost:5032/api/Course/${courseId}`);     
  }
  
  addCourse(course: Course) {
    return this.http.post("http://localhost:5032/api/Course", course);
  }

  deleteCourse(courseId: number){
    return this.http.delete(`http://localhost:5032/api/Course/${courseId}`);     
  }
  
  updateCourse(
    courseId: number,
    courseName: string,
    instituteId: number,
    courseDuration: number,
    courseFee: number,
    subjects: iSubject[]) {
    return this.http.put(`http://localhost:5032/api/Course/${courseId}`, {
      CourseId: courseId,
      CourseName: courseName,
      InstituteId: instituteId,
      CourseDuration: courseDuration,
      CourseFee: courseFee,
      Subjects: subjects
    });
  }
}
