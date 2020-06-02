import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/model/User';
import { LoginServiceService } from 'src/service/login-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy  {

  loginUser: User;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
    this.loginUser = this.loginService.getUser();
  }

  ngOnDestroy() {
  }
}
