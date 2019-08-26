import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  get loginEmail() {return this.loginForm.get('email'); }
  get password() {return this.loginForm.get('password'); }


  constructor( private builder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  login() {
    if (this.loginForm.invalid || this.loginForm.pristine) {
      alert('Invalid credentials');
    } else {
      this.router.navigate(['./users']);
     }
  }

  resetPassword() {
    alert('Reset Password');
  }
}
