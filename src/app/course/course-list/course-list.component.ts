import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

import { iCourse }from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'courses',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList!: iCourse[];
  course!: iCourse[] | any;
  selectedCourse!: iCourse[] | any;
  courseId!: number;

  constructor(private courseService: CourseService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getCourseList();
  }
    
  onClickNewCourse(){
    this.router.navigateByUrl('/newcourse');
  };

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe({
      next: (result: any) => {
        console.log(result);
        this.getCourseList();
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

  getCourseList(){
    this.courseService.getCourses().subscribe({
      next: (result: any) => {
          console.log(result);
          this.courseList = result;          
        },
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    });
  }
}
  
