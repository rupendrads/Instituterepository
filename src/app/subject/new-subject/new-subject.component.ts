import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';

import { SubjectService } from '../services/subject.service';
import { Subject, iSubject } from '../models/subject.model';
import { AuthService } from '../../authentication/services/auth.service';


@Component({
  	selector: 'new-subject',
  	templateUrl: './new-subject.component.html',
  	styleUrls: ['./new-subject.component.css']
})
export class NewSubjectComponent implements OnInit {
  	@ViewChild('myForm') form!: NgForm;

	constructor(private subjectService: SubjectService, 
		private route: ActivatedRoute,
      private router:Router,
	  private authService: AuthService) { }

 	 ngOnInit(): void { 
		
	}

  	onSubmit() {    
		console.log(this.authService.loggedInUserInstituteId);  
		if(this.authService.loggedInUserInstituteId!== undefined) {
			const subject = new Subject(
				this.form.value.subjectId,
				this.form.value.subjectname,
			    this.authService.loggedInUserInstituteId
	  		);

		  	console.log(subject.subjectName);
		  	console.log(subject.subjectId);
		  	console.log(subject.instituteId);
			console.log(subject);

		  	this.subjectService.addSubject(subject).subscribe({
				next: (result) => {
					console.log(result);
					this.router.navigateByUrl('/subjects');
				},
				error: (e) => console.error(e),
				complete: () => console.info('complete') 
			});
		}			
 	}
}
