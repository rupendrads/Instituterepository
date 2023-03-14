import { Injectable } from '@angular/core';
import { iCourse, Course, iSubject } from '../../course/models/course.model';
import { courses, subjects, courseSubjects } from './data';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  getCourses() {
    return courses.slice();
  }
  
  addCourse(course: Course, subjectArray: string[]) {
    course.id = courses.length + 1;
    subjectArray.forEach((subjectName) => {
      const subjectId = subjects.length + 1;
      const subject: iSubject = {
        id: subjectId,
        name: subjectName,
      };
      subjects.push(subject);
      courseSubjects.push({ courseId: course.id, subjectId: subjectId });
    });
    console.log(courses);
  }
}

 