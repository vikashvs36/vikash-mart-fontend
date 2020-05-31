import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = "http://127.0.0.1:3333/api/user";

  private tempUser:User = null;

  constructor(private http: HttpClient) { }

  findAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  saveUser(user:User): User {
    // debugger;
    console.log("user > ",user)
    this.http.post<User>(this.url, user).subscribe(user=> {
      this.tempUser = user
    }); 

    return this.tempUser;
  }
}
