import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { iSubject } from '../models/subject.model'; 
import { SubjectService } from '../services/subject.service';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
  selector: 'subjects',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjectList!: iSubject[];
  subject!: iSubject[] | any;
  subjectId!: number;

  constructor(private subjectService: SubjectService, 
    private router: Router, 
    private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.loggedInUserInstituteId!== undefined){
      this.getSubjectList(this.authService.loggedInUserInstituteId);
    }   
}

  onClickNewSubject() {
    this.router.navigateByUrl('/newsubject');
  };

  deleteSubject(id: number) {
    this.subjectService.deleteSubject(id).subscribe({
      next: (result: any) => {
        console.log(result);
        if(this.authService.loggedInUserInstituteId!== undefined){
          this.getSubjectList(this.authService.loggedInUserInstituteId);
        }
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

  getSubjectList(instituteId:number){
    this.subjectService.getSubjects(instituteId).subscribe({
      next: (result: any) => {
          console.log(result);
          this.subjectList = result;
          console.log(this.subjectList);          
        },
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    });
  }
}
