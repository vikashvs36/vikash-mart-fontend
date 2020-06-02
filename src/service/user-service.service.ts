import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = "http://127.0.0.1:3333/api/user";
  private login_url:string = "http://127.0.0.1:3333/api/user/login";

  private loginUser:User;

  constructor(private http: HttpClient) { }

  findAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  findUserById(id:number): Observable<User> {
    this.url += '/'+id;
    return this.http.get<User>(this.url);
  }

  saveUser(user:User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  login(username: string, password: string): User {
    const user = {'username': username, 'password': password};
    this.http.post<User>(this.login_url, user).subscribe(user => {
      
      if(user) {
        this.loginUser = user;
        localStorage.setItem("firstName", user?.profile?.firstName);
      }
      
    })    
    return this.loginUser;
  }

  getUser(): User {
    return this.loginUser;
  }

  isUserLogin(): boolean {
    return this.loginUser ? true : false;
  }

}
