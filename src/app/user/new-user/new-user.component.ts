import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormGroup, NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { iInstitute } from 'src/app/institute/models/institute.model';
import { institutes } from 'src/app/institute/services/data';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
    @ViewChild('myForm') form!: NgForm;
    
    institueId!: string;
    firstname!: string;
    lastname!: string;
    username!: string;
    password!: string;
    birthdate!: Date;
    gender!: string;
    phoneno!: string;
    email!: string;
    address!: string;
    usertype: string = "User";
    userTypes: string[] = [];
    institutes: iInstitute[] = [];
    model: any = {institute: ''};

    constructor(private userService: UserService, private router: Router) {
      this.userTypes = ["Admin", "User"];
    }

    ngOnInit(): void {
      this.institutes = [...institutes];
    }

    // onChangeUserType(event: any){
    //   console.log(event.target.value);
    //   this.usertype = event.target.value;
    // }

    onChangeInstitute(event:any){
      console.log(event.target.value);
      this.institueId = event.target.value;      
    }

    onSubmit() {
        console.log(this.form);        
        this.firstname = this.form.value.personDetails.firstname;
        this.lastname = this.form.value.personDetails.lastname;
        this.username = this.form.value.personDetails.username;
        this.password = this.form.value.personDetails.password;
        this.birthdate = new Date(this.form.value.personDetails.birthdate + "T00:00:00.000Z");
        this.gender = this.form.value.personDetails.gender;
        this.phoneno = this.form.value.personDetails.phoneno;
        this.email = this.form.value.personDetails.email;
        this.address = this.form.value.personDetails.address;   
        
        this.userService.addUser(new User(
        this.institueId,
        this.firstname,
        this.lastname,
        this.username,
        this.password,
        this.birthdate, 
        this.gender,
        this.phoneno,
        this.email,
        this.address,
        this.usertype
        )).subscribe({
          next: (result) => {
            console.log(result);
            this.router.navigateByUrl('/signin');
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete') 
      });
    }  
}

