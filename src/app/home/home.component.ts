import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { AuthService } from '../authentication/services/auth.service';


@Component({
    selector:'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    isUserLoggedIn:boolean = false;
    loggedInUserId:string|undefined = undefined;
    loggedInUserType: string|undefined = undefined;
    
    constructor(private authService:AuthService){        
    }

    ngOnInit(){
        this.isUserLoggedIn = this.authService.isUserLoggedIn;
        this.loggedInUserType = this.authService.loggedInUserType;
        this.authService.userLoggedInSubject.subscribe({
          next: (result: any) => {
            console.log(result);
            this.isUserLoggedIn = result.isUserLoggedIn;
            this.loggedInUserId = result.isUserLoggedIn == true? result.loggedInUserId : undefined;
            this.loggedInUserType = result.isUserLoggedIn  == true? result.loggedInUserType : undefined;
            
            console.log(this.isUserLoggedIn);
            console.log(this.loggedInUserType);
          },
          error: (e)=> console.log(e),
          complete: () => console.log("complete")      
        });
      }
    
      signOut(){
        this.authService.logout();
      }

}