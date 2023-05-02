import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, 
RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    
    constructor(private router:Router, private authService: AuthService)
    {  
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return new Promise((resolve, reject) => {
            if(this.authService.isUserLoggedIn == true){
                resolve(true);
            } else {
                this.router.navigate(['signin']);
                resolve(false);
            }
        });
    }
    
  }