import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/service/user-service.service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy  {

  loginUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loginUser = this.userService.getUser();
  }

  ngOnDestroy() {
  }
}
