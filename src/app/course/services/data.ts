import { iCourse, iCourseSubject, iSubject } from '../models/course.model';

 
  export const courses: iCourse[] = [
    {
      courseId: 1,
      courseName: 'MS-CIT',
      instituteId: 1,
      courseDuration: 6,
      courseFee: 7000
    },
    {
      courseId: 2,
      courseName: 'Programming with .Net',
      instituteId: 1,
      courseDuration: 12,
      courseFee: 10000
    },
    {
      courseId: 3,
      courseName: 'Web Designing',
      instituteId: 1,
      courseDuration: 6,
      courseFee: 8000
    },
    {
      courseId: 4,
      courseName: 'MS Office',
      instituteId: 2,
      courseDuration: 3,
      courseFee: 4500
    },
    {
      courseId: 5,
      courseName: 'Programming Python',
      instituteId: 2,
      courseDuration: 6,
      courseFee: 12000
    },
    {
      courseId: 6,
      courseName: 'DB',
      instituteId: 3,
      courseDuration: 9,
      courseFee: 9500
    },
    {
      courseId: 7,
      courseName: 'Advanced Programming',
      instituteId: 3,
      courseDuration: 15,
      courseFee: 15000
    }
  ]
  
  export const subjects:iSubject[] = [
    {
      subjectId: 1,
      subjectName: "C"
    },
    {
      subjectId: 2,
      subjectName: "C++"
    },
    {
      subjectId: 3,
      subjectName: "C#"
    },
    {
      subjectId: 4,
      subjectName: "Visual C++"
    },
    {
      subjectId: 5,
      subjectName: "MS Word"
    },
    {
      subjectId: 6,
      subjectName: "MS Excel"
    },
    {
      subjectId: 7,
      subjectName: "MS PowerPoint"
    },
    {
      subjectId: 8,
      subjectName: "Coreldraw"
    },
    {
      subjectId: 9,
      subjectName: "Photoshop"
    },
    {
      subjectId: 10,
      subjectName: "Python"
    },
    {
      subjectId: 11,
      subjectName: "Django"
    },
    {
      subjectId: 12,
      subjectName: "Object Oriented Programming"
    },
    {
      subjectId: 13,
      subjectName: "SOLID Principle"
    },
    {
      subjectId: 14,
      subjectName: "Extreme Programming"
    },
    {
      subjectId: 15,
      subjectName: "Design Framework"
    },
    {
      subjectId: 16,
      subjectName: "Sql Server"
    }
  ]
  
  export const courseSubjects: iCourseSubject[] = [
    {
      courseId: 1,
      subjectId: 5
    },
    {
      courseId: 1,
      subjectId: 6
    },
    {
      courseId: 1,
      subjectId: 7
    },
    {
      courseId: 2,
      subjectId: 2
    },
    {
      courseId: 2,
      subjectId: 12
    },
    {
      courseId: 3,
      subjectId: 8
    },
    {
      courseId: 3,
      subjectId: 9
    },
    {
      courseId: 4,
      subjectId: 5
    },
    {
      courseId: 4,
      subjectId: 6
    },
    {
      courseId: 4,
      subjectId: 7
    },
    {
      courseId: 5,
      subjectId: 10
    },
    {
      courseId: 5,
      subjectId: 11
    },
    {
      courseId: 6,
      subjectId: 16
    },
    {
      courseId: 7,
      subjectId: 1
    },
    {
      courseId: 7,
      subjectId: 2
    },
    {
      courseId: 7,
      subjectId: 13
    },
    {
      courseId: 7,
      subjectId: 14
    },
    {
      courseId: 7,
      subjectId: 15
    }
  
  ]