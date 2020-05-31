import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/User';
import { Profile } from 'src/model/profile';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/service/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  registerUser: FormGroup;

  regValidationMsg = {
    'email': {
      'required': 'email is required',
      'minlength': "email Name Must be equals or more than 2 character or equals or less than 8 character.",
      'maxlength': "email Name Must be equals or more than 2 character or equals or less than 8 character."
    },
    'firstName': {
      'required': 'firstName is required',
      'minlength': "firstName Name Must be equals or more than 2 character or equals or less than 8 character.",
      'maxlength': "firstName Name Must be equals or more than 2 character or equals or less than 8 character."
    },
    'lastName': {
      'required': 'lastName is required',
      'minlength': "lastName Name Must be equals or more than 2 character or equals or less than 8 character.",
      'maxlength': "lastName Name Must be equals or more than 2 character or equals or less than 8 character."
    },
    'password': {
      'required': 'password is required',
      'minlength': "password Name Must be equals or more than 4 character or equals or less than 8 character.",
      'maxlength': "password Name Must be equals or more than 4 character or equals or less than 8 character."
    },
    'confirmPassword': {
      'required': 'Confirm password is required',
      'minlength': "Confirm password Name Must be equals or more than 4 character or equals or less than 8 character.",
      'maxlength': "Confirm password Name Must be equals or more than 4 character or equals or less than 8 character."
    },
    'gender': {
      'required': 'Confirm password is required',
    }
  }

  regError = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  }

  password: string = '';
  confirmPassword: string = '';
  private newUser: User = null;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.registerUser = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
      middleName: [''],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      gender: ['', Validators.required]
    });

    this.registerUser.controls.password.valueChanges.subscribe((pass: string) => {
      this.password += pass;
      if (this.confirmPassword) {
        if (this.password.length != this.confirmPassword.length) {
          this.regError['confirmPassword'] = 'Confirm password should be same as Password.';
        } else {
          this.regError['confirmPassword'] = '';
        }
      }
    })

    this.registerUser.controls.confirmPassword.valueChanges.subscribe(val => {
      this.confirmPassword += val;
      if (this.password) {
        if (this.confirmPassword.length != this.password.length) {
          this.regError['confirmPassword'] = 'Confirm password should be same as Password.';
        } else {
          this.regError['confirmPassword'] = '';
        }
      }
    })

  }

  logKeyValuePair(group: FormGroup) {
    Object.keys(group.controls).forEach((key: string) => {
      // debugger;
      const absControl = group.get(key);
      this.regError[key] = '';
      if (absControl && !absControl.valid) {

        // console.log('key : '+key+", value : "+absControl.value)

        const message = this.regValidationMsg[key];
        for (const errorKey in absControl.errors) {
          if (errorKey) {
            this.regError[key] += message[errorKey] + '';
          }
        }
      }
    });
  }

  onSubmit(): void {
    this.logKeyValuePair(this.registerUser);
    if (!this.isPasswordMatch()) {
      this.regError['confirmPassword'] = "Password and confirm password should be same";
      return;
    }
    console.log(this.regError);

    if (this.registerUser.valid) {
      this.userService.saveUser(this.getUserFromRegisterForm(this.registerUser));
    }

  }

  isPasswordMatch(): boolean {
    return this.registerUser.controls.password.value == this.registerUser.controls.confirmPassword.value;
  }

  getUserFromRegisterForm(group: FormGroup): User {
    // debugger;
    const email = group.controls.email.value;
    const firstName = group.controls.firstName.value;
    const lastName = group.controls.lastName.value;
    const password = group.controls.password.value;
    const gender = group.controls.gender.value;
    this.newUser = new User(email, password);
    this.newUser.profile = new Profile(email, firstName, lastName, gender);
    return this.newUser;
  }

}
