import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iCourse, Course, iSubject } from '../../course/models/course.model';
//import { courses, subjects, courseSubjects } from './data';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses() {
    //return courses.slice();
    return this.http.get("http://localhost:5032/api/Course");
  }
  
  addCourse(course: Course) {
    return this.http.post("http://localhost:5032/api/Course", course);
  //   course.id = courses.length + 1;
  //   subjectArray.forEach((subjectName) => {
  //     const subjectId = subjects.length + 1;
  //     const subject: iSubject = {
  //       id: subjectId,
  //       name: subjectName,
  //     };
  //     subjects.push(subject);
  //     courseSubjects.push({ courseId: course.id, subjectId: subjectId });
  //   });
  //   console.log(courses);
  }
}

 