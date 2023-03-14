import { Component, OnInit } from '@angular/core';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CourseService],
 })
export class CourseComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    
  }
}

