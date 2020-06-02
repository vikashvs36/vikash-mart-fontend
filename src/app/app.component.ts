import { Component } from '@angular/core';
import { UserService } from 'src/service/user-service.service';
import { User } from 'src/model/User';
import { Router } from '@angular/router'
import { LoginServiceService } from 'src/service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UserService]
})
export class AppComponent {

  constructor(private userService: UserService, private loginService: LoginServiceService,
    private router: Router) {
  }  

  getUser(): User {
    return this.loginService.getUser();
  }

  isUserLogin(): boolean {
    return this.loginService.isUserLogin();
  }

  getFirstName(): string {
    return this.loginService.getFirstName();
  }

  logout(): void {
    this.loginService.logout();
  }

}
