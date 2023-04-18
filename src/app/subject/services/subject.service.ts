import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../models/subject.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getSubjects(instituteId:number) {
    return this.http.get(`${environment.host}/api/Subject?instituteId=${instituteId}`);
  }

  getSubject(subjectId: string) {
    return this.http.get(`${environment.host}/api/Subject/${subjectId}`);
  }

  addSubject(subject: Subject) {
    return this.http.post(`${environment.host}/api/Subject`, subject);
  }

  deleteSubject(subjectId: number) {
    return this.http.delete(`${environment.host}/api/Subject/${subjectId}`);
  }

  updateSubject(
    subjectId: number,
    subjectName: string,
    instituteId: number) {
    return this.http.put(`${environment.host}/api/Subject/${subjectId}`, {
      SubjectId: subjectId,
      SubjectName: subjectName,
      InstituteId: instituteId
    });
  }
}
