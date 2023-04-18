import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService { 
  constructor(private http: HttpClient) {}

  addUser(user: User) {   
    console.log(user);
    return this.http.post(`${environment.host}/api/Users`, user);     
  }

  updateUser(userId:string,
    firstName: string, 
    lastName: string, 
    birthdate: Date, 
    gender: string, 
    phoneNo: string, 
    email: string,
    address: string) {
    return this.http.put(`${environment.host}/api/Users/${userId}`, {
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
    return this.http.get(`${environment.host}/api/Users/${userId}`);     
  }

  getUsers(){
    return this.http.get(`${environment.host}/api/Users`);     
  }
}
