import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginEmail: string;
  password: string;


  constructor( private builder: FormBuilder ) { }

  ngOnInit() {
  }

  login() {
    if (this.loginEmail === 'admin' && this.password === 'admin') {
      // this.router.navigate(["user"]);
     } else {
       alert('Invalid credentials');
     }
  }

  resetPassword() {
    alert('Reset Password');
  }
}
