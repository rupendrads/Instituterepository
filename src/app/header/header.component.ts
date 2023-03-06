import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../user/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn:boolean = false;
  loggedInUserName:string|undefined = undefined;

  constructor(private authService:AuthService){        
  }

  ngOnInit(){
    this.authService.userLoggedInSubject.subscribe(result => {
      this.isUserLoggedIn = result;
    })
  }

  signOut(){
    this.authService.logout();
  }
}
