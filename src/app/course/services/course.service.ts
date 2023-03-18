import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { iCourse, Course, iSubject } from '../../course/models/course.model';
import { courses, subjects, courseSubjects } from './data';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses!: iCourse[];
  course!: Course[];

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get("http://localhost:5032/api/Course"); 
  }
  
  addCourse(course: Course, subjectArray: string[]) {
      course.courseId = courses.length + 1;
     subjectArray.forEach((subjectName) => {
      const subjectId = subjects.length + 1;
      const subject: iSubject = {
        subjectId: subjectId,
        subjectName: subjectName,
      };
      subjects.push(subject);
      courseSubjects.push({ courseId: course.courseId, subjectId: subjectId });
    });
    courses.push(course as iCourse);
    console.log(courses);
    return of(course);

    // const courseToAdd = {
    //   CourseName: course.courseName,
    //   InstituteId: course.instituteId,
    //   CourseFee: course.courseFee,
    //   CourseDuration: course.courseDuration,
    //   Subjects: [
    //     {
    //         subjectId: 3,
    //         subjectName: "C Basics"
    //     },
    //     {
    //         subjectId: 4,
    //         subjectName: "C Intermediate"
    //     }
    //   ]
    // }
    return this.http.post("http://localhost:5032/api/Course", this.addCourse);
  }
  
  onDeleteCourse(courseId: number) {
    let course = this.courses.find(x => x.courseId === courseId);
    let index = this.courses.indexOf(course!,0);
    this.courses.splice(index,1);
  }

  onGetCourse(courseId: number) {
   // return of(courses.find(c => c.id === courseId));
    return this.http.get(`http://localhost:5032/api/Course/${courseId}`);  
  }

  
    updateCourse(
      courseId:string,
      courseName: string, 
      instituteId: number, 
      Ssubjects: string, 
      courseDuration: number, 
      courseFee: number, 
      ) {
    return this.http.put(`http://localhost:5032/api/Course/${courseId}`, {
      CourseId: courseId,
      CourseName: courseName,
      InstituteId: instituteId,
      SSubjects: Ssubjects,
      CourseDuration: courseDuration,
      CourseFee: courseFee,
    });
  }
}
