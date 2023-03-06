import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { users } from "./data";

@Injectable({
  providedIn: 'root'
})
export class UserService { 
  constructor() {}

  addUser(user: User) {    
    users.push(user);
    console.log(users);
  }
}
