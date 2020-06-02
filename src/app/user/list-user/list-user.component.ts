import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/service/user-service.service';
import { User } from 'src/model/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, OnDestroy {

  userList: User[] = [];
  userListSub: Subscription;

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    debugger
    this.userListSub = this.userService.findAllUser().subscribe((users: User[]) => { this.userList = users; });
  }

  ngOnDestroy() {
    if(this.userList) {
      this.userListSub.unsubscribe();
    }
  }

}
