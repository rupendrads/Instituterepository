import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject, iSubject } from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getSubjects(instituteId:number) {
    return this.http.get(`http://localhost:5032/api/Subject?instituteId=${instituteId}`);
  }

  getSubject(subjectId: string) {
    return this.http.get(`http://localhost:5032/api/Subject/${subjectId}`);
  }

  addSubject(subject: Subject) {
    return this.http.post("http://localhost:5032/api/Subject", subject);
  }

  deleteSubject(subjectId: number) {
    return this.http.delete(`http://localhost:5032/api/Subject/${subjectId}`);
  }

  updateSubject(
    subjectId: number,
    subjectName: string,
    instituteId: number) {
    return this.http.put(`http://localhost:5032/api/Subject/${subjectId}`, {
      SubjectId: subjectId,
      SubjectName: subjectName,
      InstituteId: instituteId
    });
  }
}
