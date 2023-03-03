import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSelected = new EventEmitter<User>();
 
  private users: User[] = [
      new User('pravin', 'kolambkar','pravinsk', 'pravin123', '13/01/1975', 'male', 9976543213, 'pravin@gmail.com', '6 ashok niwas Bhandup'),

      new User('mahi', 'gorde','mahiG', 'mahi123', '16/11/2020', 'female', 9978345613, 'mahi@gmail.com', '7 ashok niwas Bhandup')
  ];

  constructor() {}

  addUser(user: User) {    
    this.users.push(user);
    console.log(this.users);
  }

  authenticateUser(userName:string, password:string): boolean{

    return true;
  }

}
