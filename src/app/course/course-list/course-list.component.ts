import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iCourse }from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList!: iCourse[];

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (result: any) => {
          console.log(result);
          this.courseList = result;          
        },
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    });
  }
  
  onClickNewCourse(){
    this.router.navigateByUrl('/newcourse');
  };
}
  
