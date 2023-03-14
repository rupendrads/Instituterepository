import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../authentication/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn:boolean = false;
  loggedInUserName:string|undefined = undefined;
  loggedInUserId:string|undefined = undefined;

  constructor(private authService:AuthService){        
  }

  ngOnInit(){
    this.authService.userLoggedInSubject.subscribe({
      next: (result: any) => {
        this.isUserLoggedIn = result.isUserLoggedIn;
        this.loggedInUserId = result.isUserLoggedIn == true? result.loggedInUserId : undefined;
      },
      error: (e)=> console.log(e),
      complete: () => console.log("complete")      
    });
  }

  signOut(){
    this.authService.logout();
  }
}
