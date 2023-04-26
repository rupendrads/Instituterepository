import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../authentication/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed: boolean = true;
  isUserLoggedIn:boolean = false;
  loggedInUserName:string|undefined = undefined;
  loggedInUserId:string|undefined = undefined;
  loggedInUserType: string|undefined = undefined;

  constructor(private authService:AuthService){        
  }

  ngOnInit(){
    this.authService.userLoggedInSubject.subscribe({
      next: (result: any) => {
        console.log(result);
        this.isUserLoggedIn = result.isUserLoggedIn;
        this.loggedInUserId = result.isUserLoggedIn == true? result.loggedInUserId : undefined;
        this.loggedInUserType = result.isUserLoggedIn  == true? result.loggedInUserType : undefined;
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
