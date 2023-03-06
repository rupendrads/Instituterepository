import { iCourse, iCourseSubject, iSubject} from '../models/course.model'
 
  export const courses: iCourse[] = [
    {
      id: 1,
      name: 'MS-CIT',
      instituteId: 1,
      duration: 6,
      fee: 7000
    },
    {
      id: 2,
      name: 'Programming with .Net',
      instituteId: 1,
      duration: 12,
      fee: 10000
    },
    {
      id: 3,
      name: 'Web Designing',
      instituteId: 1,
      duration: 6,
      fee: 8000
    },
    {
      id: 4,
      name: 'MS Office',
      instituteId: 2,
      duration: 3,
      fee: 4500
    },
    {
      id: 5,
      name: 'Programming Python',
      instituteId: 2,
      duration: 6,
      fee: 12000
    },
    {
      id: 6,
      name: 'DB',
      instituteId: 3,
      duration: 9,
      fee: 9500
    },
    {
      id: 7,
      name: 'Advanced Programming',
      instituteId: 3,
      duration: 15,
      fee: 15000
    }
  ]
  
  export const subjects:iSubject[] = [
    {
      id: 1,
      name: "C"
    },
    {
      id: 2,
      name: "C++"
    },
    {
      id: 3,
      name: "C#"
    },
    {
      id: 4,
      name: "Visual C++"
    },
    {
      id: 5,
      name: "MS Word"
    },
    {
      id: 6,
      name: "MS Excel"
    },
    {
      id: 7,
      name: "MS PowerPoint"
    },
    {
      id: 8,
      name: "Coreldraw"
    },
    {
      id: 9,
      name: "Photoshop"
    },
    {
      id: 10,
      name: "Python"
    },
    {
      id: 11,
      name: "Django"
    },
    {
      id: 12,
      name: "Object Oriented Programming"
    },
    {
      id: 13,
      name: "SOLID Principle"
    },
    {
      id: 14,
      name: "Extreme Programming"
    },
    {
      id: 15,
      name: "Design Framework"
    },
    {
      id: 16,
      name: "Sql Server"
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