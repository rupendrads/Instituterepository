import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user.model';
import { users } from "./data";


@Injectable({
  providedIn: 'root'
})
export class UserService { 
  constructor(private http: HttpClient) {}

  addUser(user: User) {   
    console.log(user);
    return this.http.post("http://localhost:5032/api/Users", user);     
  }

  updateUser(userId:string,
    firstName: string, 
    lastName: string, 
    birthdate: Date, 
    gender: string, 
    phoneNo: string, 
    email: string,
    address: string) {
    return this.http.put(`http://localhost:5032/api/Users/${userId}`, {
      Id: userId,
      FirstName: firstName,
      LastName: lastName,
      Birthdate: birthdate,
      Gender: gender,
      PhoneNo: phoneNo,
      Email: email,
      Address: address
    });
  }

  getUser(userId: string){
    return this.http.get(`http://localhost:5032/api/Users/${userId}`);     
  }
}
