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
