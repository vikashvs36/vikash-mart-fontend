import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private login_url:string = "http://127.0.0.1:3333/api/user/login";

  constructor(private router: Router, private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    const user = {'username': username, 'password': password};
    return this.http.post<User>(this.login_url, user);
    // this.http.post<User>(this.login_url, user).subscribe(user => {
    //   if(user) {
    //     sessionStorage.setItem("firstName", user?.profile?.firstName);
    //     sessionStorage.setItem("user", JSON.stringify(user));
    //     loginUser = user;
    //   } else {
    //     sessionStorage.setItem("firstName", null);
    //     sessionStorage.setItem("user", null);
    //   }
    // })    
    // return loginUser;
  }

  getUser(): User {
    const user:User = JSON.parse(sessionStorage.getItem("user"));
    return user;
  }

  getFirstName(): string {
    return sessionStorage.getItem("firstName") || '';
  }

  isUserLogin(): boolean {
    return sessionStorage.getItem("user") ? true : false;
  }

  logout(): void {
    sessionStorage.clear();
    this.goToLogin()
  }

  goToLogin(): void {
    this.router.navigate(['/login'])
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard'])
  }
  
}
