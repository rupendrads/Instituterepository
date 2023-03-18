import { Component, OnInit } from "@angular/core";
import { iCourse, iSubject, iCourseSubject } from '../../course/models/course.model';
import { iInstitute } from '../../institute/models/institute.model';
import { institutes } from '../../institute/services/data';
import { courses, subjects, courseSubjects } from '../../course/services/data';

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
    }

      onChangeInstitute(event:any){
        console.log(event.target.value);
        const selectedInstitueId = event.target.value;
        this.courses = courses.filter(c => c.instituteId == selectedInstitueId);
        this.selectedCourse = undefined;
        this.selectedSubjects = [];
      }

      onChangeCourse(event:any){
        console.log(event.target.value);
        const selectedCourseId = event.target.value;        
        this.selectedCourse = this.courses.find(c => c.courseId == selectedCourseId);
        const selectedSubjectIds = this.courseSubjects.filter(cs => cs.courseId == selectedCourseId);

        this.selectedSubjects = [];
        selectedSubjectIds.forEach(element => {
          const subject = this.subjects.find(s => s.subjectId == element.subjectId);
          if(subject !== undefined){
            this.selectedSubjects?.push(subject);
          }
        });
      }
  }
