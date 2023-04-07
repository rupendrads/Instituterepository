import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userLoggedInSubject = new Subject<any>();
    public isUserLoggedIn:boolean = false;
    public loggedInUserId: |undefined = undefined;
    public loggedInUserName: string|undefined = undefined;
    public loggedInUserType: string|undefined = undefined;
    public loggedInUserInstituteId: number|undefined = undefined;

    constructor(private http: HttpClient) {
    }
      
    login(username:string, password:string ) {        
        this.http.post("http://localhost:5032/api/auth", { username: username, password: password}).subscribe({
            next: (result: any) => {
            console.log(result);

            this.isUserLoggedIn = result.loggedIn;
            this.loggedInUserName = result.loggedIn == true ? username: undefined;
            this.loggedInUserId = result.loggedIn == true ? result.userId : undefined; 
            this.loggedInUserType = result.loggedIn == true ? result.userType : undefined; 
            this.loggedInUserInstituteId = result.loggedIn == true ? result.instituteId : undefined;   
            console.log(this.loggedInUserInstituteId);    
            this.userLoggedInSubject.next({isUserLoggedIn: this.isUserLoggedIn, loggedInUserId: this.loggedInUserId, loggedInUserType: this.loggedInUserType});
          },
          error: (e) => console.log(e),
          complete: () => console.log('complete')
        });   
    }

    logout(){
        this.isUserLoggedIn = false;
        this.loggedInUserName = undefined;
        this.loggedInUserId = undefined;

        this.userLoggedInSubject.next({isUserLoggedIn: this.isUserLoggedIn, loggedInUserId: this.loggedInUserId, loggedInUserType: this.loggedInUserType});
    }
}