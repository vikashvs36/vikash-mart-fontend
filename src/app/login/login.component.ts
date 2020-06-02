import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user-service.service';
import { User } from 'src/model/User';
import { LoginServiceService } from 'src/service/login-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  login= 'Login';
  validationMessage= {
    'userName':{
      'required': 'UserName is required',
      'minlength': "userName Name Must be equals or more than 2 character or equals or less than 8 character.",
      'maxlength': "userName Name Must be equals or more than 2 character or equals or less than 8 character."
    },
    'password': {
      'required': 'password is required',
      'minlength': "password Must be equals or more than 2 character or equals or less than 8 character.",
      'maxlength': "password Must be equals or more than 2 character or equals or less than 8 character."
    }
  };
  formErrors = {
    'userName': '',
    'password': ''
  };

  loginSub: Subscription;
  error: string = '';

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService,
    private loginService: LoginServiceService) { }

  ngOnInit(): void {
    this.loginForm =  this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]]
    });
  }

  logKeyValuePair(group: FormGroup): void {
    Object.keys(group.controls).forEach((key:string) => {
      const absControl = group.get(key);
      console.log('key : '+key+", value : "+absControl.value)
      this.formErrors[key]='';
      if(absControl && !absControl.valid) {
        const message = this.validationMessage[key];
        
        for(const errorKey in absControl.errors ) {
          if(errorKey) {
            this.formErrors[key] += message[errorKey] +' ';  
          }
        }
      }
    });
  }

  onSubmit(): void {
    this.logKeyValuePair(this.loginForm);

    if(this.loginForm.valid) {
      this.loginSub = this.loginService.login(this.loginForm.controls.userName.value, this.loginForm.controls.password.value)
          .subscribe(user=> {
            if(user) {
                  sessionStorage.setItem("firstName", user?.profile?.firstName);
                  sessionStorage.setItem("user", JSON.stringify(user));
                  this.goToUser();
                } else {
                  sessionStorage.setItem("firstName", '');
                  sessionStorage.setItem("user", '');
                  this.error = "Username Or password is wrong";
                }
          });
    }
  }

  goToUser() {
    this.router.navigate(['/list-user'])
  }

  ngOnDestroy(): void {
    if(this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }

}
