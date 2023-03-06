import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { users } from "./data";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userLoggedInSubject = new Subject<boolean>();
    public isUserLoggedIn:boolean = false;

    constructor() {
    }
      
    login(username:string, password:string ): boolean{        
        if(users.findIndex(user => user.username == username && user.password == password) > -1)
        {
            this.isUserLoggedIn = true;
        } else {
            this.isUserLoggedIn = false;
        }        
        this.userLoggedInSubject.next(this.isUserLoggedIn);
        return this.isUserLoggedIn;
    }

    logout(){
        this.isUserLoggedIn = false;
        this.userLoggedInSubject.next(this.isUserLoggedIn);
    }
}