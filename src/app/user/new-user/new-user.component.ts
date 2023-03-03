import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormGroup, NgForm, FormControl } from '@angular/forms';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
    @ViewChild('myForm') form!: NgForm;
    firstname!: string;
    lastname!: string;
    username!: string;
    password!: string;
    birthdate!: string;
    gender!: string;
    phoneno!: number;
    email!: string;
    address!: string;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log(this.form);

        this.firstname = this.form.value.personDetails.firstname;
        this.lastname = this.form.value.personDetails.lastname;
        this.username = this.form.value.personDetails.username;
        this.password = this.form.value.personDetails.password;
        this.birthdate = this.form.value.personDetails.birthdate;
        this.gender = this.form.value.personDetails.gender;
        this.phoneno = this.form.value.personDetails.phoneno;
        this.email = this.form.value.personDetails.email;
        this.address = this.form.value.personDetails.address;   

        this.userService.addUser(new User(
        this.firstname,
        this.lastname,
        this.username,
        this.password,
        this.birthdate, 
        this.gender,
        this.phoneno,
        this.email,
        this.address
        ));
    }  
}

