import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user-service.service';
import { User } from 'src/model/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  public user:User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id) {
        // + operator is used for convert string to int.
        this.userService.findUserById(+id).subscribe(user => this.user = user);
      }
    })
  }

}
