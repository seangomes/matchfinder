import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../core/providers/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { LoaderService } from '../../../core/providers/loader/loader.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private errorMessage;
  private user;
  private saveLoginInfo : boolean = false;

  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private loaderService: LoaderService) { }

  ngOnInit() {

    let user : User = this.authService.currentUser;
    if(user) {
      this.router.navigate(['/home']);
    }

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      rememberMe: false
    })
  }

  onLoginFormSubmit() {
    if(this.loginForm.valid) {
      this.loaderService.showLoader();
      //calling the service
      this.authService.loginWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password, this.loginForm.value.rememberMe)
      .then((data) => {
        if(data) {
          this.loaderService.hideLoader();
          this.errorMessage = data;
        }else {
          this.router.navigate(['home']);
        }

      });


    }
  }

}
