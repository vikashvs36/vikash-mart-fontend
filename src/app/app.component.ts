import { Component } from '@angular/core';
import { UserService } from 'src/service/user-service.service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {

  constructor(private userService: UserService) {
  }  

  getUser(): User {
    return this.userService.getUser();
  }

  isUserLogin(): boolean {
    // return this.userService.isUserLogin();
    return !! localStorage.getItem("firstName");
  }

  getFirstName(): string {
    // const user: User = this.getUser();
    // return user?.profile?.firstName;
    return localStorage.getItem("firstName");
  }



}
