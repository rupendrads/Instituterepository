import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DatePipe } from '@angular/common';
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";
import { first } from "rxjs";

@Component({
    selector: 'edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
    @ViewChild('myForm') form!: NgForm;
    userId: string|undefined = undefined;
    usertype!: string;
    userTypes: string[] = [];
    
    constructor(private route: ActivatedRoute, 
        private userService: UserService, 
        public datepipe: DatePipe,
        private router: Router){
        this.userTypes = ["Admin", "User"];
    }
    
    ngOnInit(): void {
        const userId = this.route.snapshot.paramMap.get('id');

        if(userId!=null){
            this.userId = userId;
            this.userService.getUser(userId).subscribe({
                next: (result: any) => {
                    console.log(result);
                    const birthdate =this.datepipe.transform(new Date(result.birthdate), 'yyyy-MM-dd');
                    this.form.control.patchValue({firstname: result.firstName});
                    this.form.control.patchValue({lastname: result.lastName});  
                    this.form.control.patchValue({birthdate: birthdate});  
                    this.form.control.patchValue({gender: result.gender.toLowerCase()});  
                    this.form.control.patchValue({phoneno: result.phoneNo});  
                    this.form.control.patchValue({email: result.email});
                    this.form.control.patchValue({address: result.address});
                },
                error: (e) => console.log(e),
                complete: () => console.log("Complete")
            });
        }   
    }

    onChangeUserType(event: any){
        console.log(event.target.value);
        this.usertype = event.target.value;
    }

    onSubmit(){
        console.log(this.form);
        if(this.userId!== undefined){
        this.userService.updateUser(
            this.userId,
            this.form.value.firstname,
            this.form.value.lastname, 
            new Date(this.form.value.birthdate + "T00:00:00.000Z"), 
            this.form.value.gender, 
            this.form.value.phoneno,
            this.form.value.email,
            this.form.value.address
            ).subscribe({
                next: (result) => {
                  console.log(result);
                  this.router.navigateByUrl('/home');        
                },
                error: (e) => console.error(e),
                complete: () => {
                    console.info('complete') 
                }
              }); 
        }
    }
}