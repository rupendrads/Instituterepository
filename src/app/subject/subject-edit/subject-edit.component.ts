import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../authentication/services/auth.service';

import { SubjectService } from '../services/subject.service';
import { iSubject } from '../models/subject.model';

@Component({
  	selector: 'editsubject',
  	templateUrl: './subject-edit.component.html',
  	styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {
 	@ViewChild('myForm') form!: NgForm;

	subject: iSubject|any;
	subjectId!: string;
	subjectName!: string;
	instituteId!: number;

	constructor(private subjectService: SubjectService, private route: ActivatedRoute, private router:Router, private authService: AuthService) { }

  	ngOnInit(): void {
    	const subjectId = this.route.snapshot.paramMap.get('id');

    	if (subjectId != null) {
			this.subject = {
			subjectId: +subjectId,
			subjectName: '',
			instituteId: this.instituteId
			};

		this.subjectService.getSubject(subjectId).subscribe({
			next: (result: any) => {
			console.log(result);
			this.subject = result;

			this.subjectName = result.subjectName;
			this.subjectId = result.subjectId;
			this.instituteId = result.instituteId;
			console.log(this.subjectName);
			},
			error: (e) => console.log(e),
			complete: () => console.log('Complete'),
		});
  	}
}

	onSubmit() {
		console.log(this.authService.loggedInUserInstituteId);
			if(this.authService.loggedInUserInstituteId!== undefined) {
				if(confirm("Confirm to update this subject?")) {
					console.log("Confirm to update this subject?");
				
					console.log(this.subject);
				
				this.subjectService.updateSubject(
					this.subject.subjectId,
					this.subject.subjectName,
					this.subject.instituteId
				).subscribe({
					next: (result) => {
						console.log(result);
						this.router.navigateByUrl('/subjects');	
					},
						error: (e) => console.error(e),
						complete: () => {
						console.info('complete');
					},
				});
			} 
		}
	}
}
