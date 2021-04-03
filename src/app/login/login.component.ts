import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  fieldTextType: boolean;
  returnUrl: string;
  invalidLogin: boolean;

  constructor(
    // private _authService: AuthService,
    private _router: Router,
    // private _loggedInNotification: NotificationService,
    private _route :ActivatedRoute,
    private _formBuilder : FormBuilder
    ) {}

  ngOnInit() {

    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]);

    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    this.loginForm = this._formBuilder.group({
      "email": this.email,
      "password": this.password
  });

  }


  loginUser() {
    // let userLoginDetails = this.form.value;
    // this._authService.loginUser(userLoginDetails)
    // .subscribe(
    //   res => {
    //     let token= (<any>res).access;
    //     console.log(token)
    //     this.invalidLogin = false;
    //     console.log(this.returnUrl)
    //     this._loggedInNotification.showToastr('Logged in successfully. Success')
    //     this._router.navigateByUrl(this.returnUrl)

    //   },
    //   err =>{
    //     this.invalidLogin = true;
    //     this._loggedInNotification.showError('Please check your credentials and try again. Oops!')
    //   }
    // )
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
