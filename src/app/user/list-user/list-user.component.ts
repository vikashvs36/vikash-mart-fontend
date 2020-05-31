import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user-service.service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public userList: User[] = null;

  constructor(private userService: UserService ) { }

  ngOnInit(): void {

    this.userService.findAllUser().subscribe((users: User[]) => { this.userList = users});
    // debugger;
    console.log(this.userList);
  }

}
