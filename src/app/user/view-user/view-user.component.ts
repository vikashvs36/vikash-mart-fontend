import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/service/user-service.service';
import { User } from 'src/model/User';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit, OnDestroy {

  viewUser:User = null;
  routeSub: Subscription;
  userSub: Subscription;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.routeSub = this.route.params.subscribe(params => {
    //   let id = params['id'];
    //   if(id) {
    //     // + operator is used for convert string to int.
    //     this.userSub = this.userService.findUserById(+id).subscribe((user:User) => this.viewUser = user);
    //   }
    // })
    this.userSub = this.userService.findUserById(1).subscribe((user:User) => this.viewUser = user);
  }

  ngOnDestroy(): void {
    if(this.userSub) {
      this.userSub.unsubscribe();
    }
    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
