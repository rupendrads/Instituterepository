import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { SubjectService } from 'src/app/subject/services/subject.service';
import { ConfirmDialogService } from 'src/app/confirm-dialog/confirm-dialog.service';

import { iCourse, iSubject } from '../models/course.model';
import { iInstitute } from '../../institute/models/institute.model';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { InstituteService } from 'src/app/institute/services/institute.service';
import { institutes } from '../../institute/services/data';

@Component({
	selector: 'editcourse',
	templateUrl: './course-edit.component.html',
	styleUrls: ['./course-edit.component.css'],
})
export class CourseEditComponent implements OnInit {
	@ViewChild('myForm') form!: NgForm;
	@ViewChild('myTable') tableElement: ElementRef|undefined;

	institutes: iInstitute[] = [];
	selectedInstitute: string = '';

	subjects: iSubject[] = [];
	selectedSubject: iSubject | any;
	selectedSubjects: iSubject[] = [];
	course!: iCourse;
	courseId: string | undefined = undefined;

	institute: iInstitute[] | undefined = undefined;
	instituteName: string | undefined = undefined;
	instituteId!: number;

	royaltyTypes: string[] = [];
	royaltyType: string | undefined = undefined;
	royaltyValue!: number;

	model: any = {subjectname: '', royaltytype: ''};
    //defaultRoyaltyValue = '15';

    numberValue!: string;

  constructor(
		private route: ActivatedRoute,
		private courseService: CourseService,
		private subjectService: SubjectService,
		private confirmDialogService: ConfirmDialogService,
		private router: Router,
		private authService: AuthService, 
      private instituteService: InstituteService
  ) {
    	this.royaltyTypes = ['Percentage', 'Amount'];
		 this.instituteId = this.authService.loggedInUserInstituteId!;
  }

  ngOnInit(): void {
    	this.loadData();
  }

		loadData(){
			const courseId = this.route.snapshot.paramMap.get('id');

			this.institutes = [...institutes];
			this.getSubjectList(this.instituteId);

			if (courseId != null) {	
			this.course = {
				courseId: +courseId,
				courseName: '',
				instituteId: -1,
				courseDuration: -1,
				courseFee: 0,
				royaltyType: '',
				royaltyValue: 0,
				subjects: [],
			};

			this.courseService.getCourse(courseId).subscribe({
				next: (result: any) => {
					console.log(result);
					this.course = result;

					this.instituteId = result.instituteId;
					const institute = institutes.find((i) => i.id == result.instituteId);
					this.instituteName = institute?.name;

					this.selectedSubjects = result.subjects;
					this.royaltyType = result.royaltyType;
					this.royaltyValue = result.royaltyValue;
				},
				error: (e) => console.log(e),
				complete: () => console.log('Complete'),
			});
			}
		}

		isNumber(value: string): boolean {
			return /^[0-9]+$/.test(value);
		 }

		onAddSubject() {
			if (
				this.selectedSubject !== undefined &&
				!this.selectedSubjects.includes(this.selectedSubject)
			) {
				this.selectedSubjects?.push(this.selectedSubject);
			}
		}

		onDeleteSubject(subject: any) {
			let index = this.selectedSubjects?.indexOf(subject);
			this.selectedSubjects.splice(index, 1);
		}

		onChangeSubject(event: any) {
			const selectedSubjectId = event.target.value;
			this.selectedSubject = this.subjects.find(
				(s) => s.subjectId == selectedSubjectId
			);
		}

		onChangeRoyaltyType(event: any) {
			console.log(event.target.value);
			this.royaltyType = event.target.value;
		}

		getSubjectList(instituteId:number) :void {
			this.subjectService.getSubjects(instituteId).subscribe({
				next: (result: any) => {
					console.log(result);
					this.subjects = result;
					console.log(this.subjects);          
				},
				error: (e) => console.log(e),
				complete: () => console.log("Complete")
			});
		}

    
   onSubmit() {
	const tableRows = this.tableElement!.nativeElement.rows;

	if (tableRows.length === 0) {
		  console.log('Table is empty.');
		  // Perform your validation logic for an empty table
	} else if (tableRows.length !== 0){
	   console.log('Table is not empty.');
	   // Perform your validation logic for a non-empty table

		this.confirmDialogService.confirmThis("Are you sure to update?",  () => { 

			this.course.subjects = [...this.selectedSubjects];
			this.course.royaltyType = this.royaltyType;
			
			console.log(this.course);
			
			this.courseService
				.updateCourse(
				this.course.courseId,
				this.course.courseName,
				this.course.instituteId,
				this.course.courseDuration,
				this.course.courseFee,
				this.course.royaltyType!,
				this.course.royaltyValue,
				this.course.subjects
		)
			.subscribe({
				next: (result) => {
				console.log(result);
				this.router.navigateByUrl('/courses');
				},
				error: (e) => console.error(e),
				complete: () => {
				console.info('complete');
				},
		});
        
        	console.log(`Confirm Clicked`);  
      }, () => {       
			this.loadData();  
			console.log(`Cancel Clicked`);  
      }) 
  	}
}
}

