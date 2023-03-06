import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  @ViewChild('userLogin') form!: NgForm;

  constructor(private authService: AuthService,
    private router: Router){}

  onSubmit(){
    console.log(this.form.value);
    const isUserAuthentic = this.authService.login(this.form.value.username, this.form.value.password);
    if(isUserAuthentic === true){
      this.router.navigateByUrl('/home');     
    }
  }
}