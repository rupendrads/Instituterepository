import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('userLogin') form!: NgForm;

  constructor(private authService: AuthService,
    private router: Router){}

  ngOnInit(): void {
    this.authService.userLoggedInSubject.subscribe({
      next: (result) => {
        if(result.isUserLoggedIn === true){
          this.router.navigateByUrl('/home');     
        }
      },
      error: (e)=> console.log(e),
      complete: () => console.log("complete")      
    });
  }

  onSubmit(){
    console.log(this.form.value);
    this.authService.login(this.form.value.username, this.form.value.password);    
  }
}