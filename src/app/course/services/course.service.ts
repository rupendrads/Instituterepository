import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course, iSubject } from '../../course/models/course.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService implements OnInit{

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  getCourses() {
    return this.http.get(`${environment.host}/api/Course`);
  }

  getCourse(courseId: string){
    return this.http.get(`${environment.host}/api/Course/${courseId}`);     
  }
  
  addCourse(course: Course) {
    return this.http.post(`${environment.host}/api/Course`, course);
  }

  deleteCourse(courseId: number){
    return this.http.delete(`${environment.host}/api/Course/${courseId}`);     
  }
  
  updateCourse(
    courseId: number,
    courseName: string,
    instituteId: number,
    courseDuration: number,
    courseFee: number,
    royaltyType: string,
    royaltyValue: number,
    
    subjects: iSubject[]) {
    return this.http.put(`${environment.host}/api/Course/${courseId}`, {
      CourseId: courseId,
      CourseName: courseName,
      InstituteId: instituteId,
      CourseDuration: courseDuration,
      CourseFee: courseFee,
      RoyaltyType: royaltyType,
      RoyaltyValue: royaltyValue,
      Subjects: subjects
    });
  }
}
