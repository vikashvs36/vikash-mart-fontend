import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUser: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editUser = this.fb.group({
      email: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      password: [''],
      confirmPassword: [''],
      gender: ['']
    });
  }

}
