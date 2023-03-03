import { Component, OnInit } from "@angular/core";

interface iInstitute {
  id: number,
  name: string
}

interface iCourse {
  id: number,
  name: string,
  instituteId: number,
  duration: number,
  fee: number
}

interface iSubject {
  id: number,
  name: string,
}

interface iCourseSubject {
 courseId: number,
 subjectId: number 
}

const institutes:iInstitute[] = [
  {
    id: 1,
    name: 'Vidyasagar Institute' 
  },
  {
    id: 2,
    name: 'Ceat Training' 
  },
  {
    id: 3,
    name: 'Keerti Institute' 
  }
]

const courses: iCourse[] = [
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

const subjects:iSubject[] = [
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

const courseSubjects: iCourseSubject[] = [
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

@Component({
    selector: 'new-admission',
    templateUrl: './new-admission.component.html',
    styleUrls: ['./new-admission.component.css']
  })
  export class NewAdmission implements OnInit {
      institutes: iInstitute[] = [];
      courses: iCourse[] = [];
      subjects: iSubject[] = [];
      courseSubjects: iCourseSubject[] = [];
      selectedCourse: iCourse|undefined = undefined;
      selectedSubjects: iSubject[]|undefined = undefined;

      ngOnInit(){
        this.institutes = [...institutes];
        this.subjects = [...subjects];      
        this.courseSubjects = [...courseSubjects];  
        console.log(this.institutes);
        console.log(this.subjects);
        console.log(this.courseSubjects);
      }

      onChangeInstitute(event:any){
        console.log(event.target.value);
        const selectedInstitueId = event.target.value;
        this.courses = courses.filter(c => c.instituteId == selectedInstitueId);
        console.log(this.courses);
        this.selectedCourse = undefined;
        this.selectedSubjects = [];
      }

      onChangeCourse(event:any){
        console.log(event.target.value);
        const selectedCourseId = event.target.value;        
        this.selectedCourse = this.courses.find(c => c.id == selectedCourseId);
        const selectedSubjectIds = this.courseSubjects.filter(cs => cs.courseId == selectedCourseId);
        console.log(selectedSubjectIds);

        this.selectedSubjects = [];
        selectedSubjectIds.forEach(element => {
          const subject = this.subjects.find(s => s.id == element.subjectId);
          if(subject !== undefined){
            this.selectedSubjects?.push(subject);
          }
        });
        console.log(this.selectedSubjects);
      }
  }
