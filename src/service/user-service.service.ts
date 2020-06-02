import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = "http://127.0.0.1:3333/api/user";

  constructor(private http: HttpClient, private router: Router) { }

  findAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  findUserById(id:number): Observable<User> {
    const url = this.url +'/'+id;
    return this.http.get<User>(url);
  }

  saveUser(user:User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

}
