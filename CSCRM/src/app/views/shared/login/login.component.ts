import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
<<<<<<< HEAD
import { HttpHeaders, HttpClient } from '@angular/common/http';
=======
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordModalComponent } from '../reset-password-modal/reset-password-modal.component';

>>>>>>> 0762982c4af1476fc2dd8bfea369842816db619f


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
    loginForm: FormGroup;
    userLoggedIn: boolean;
=======
  loginForm: FormGroup;
  loginEmail: string;
  password: string;
  email: string;
>>>>>>> 0762982c4af1476fc2dd8bfea369842816db619f

    constructor( private builder: FormBuilder, private http: HttpClient, private router: Router) { }

<<<<<<< HEAD
    ngOnInit() {
        this.loginForm = this.builder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
        });
    }
=======
  constructor( private builder: FormBuilder, private router: Router, private dialog: MatDialog ) { }
>>>>>>> 0762982c4af1476fc2dd8bfea369842816db619f


    async login() {
        console.log(this.loginForm.value);

        const loginURL = 'https://localhost:44321/api/auth/login';

<<<<<<< HEAD
        const result: any = await this.http.post
        (
            loginURL, this.loginForm.value,
            {
                headers: new HttpHeaders
                ({
                    'Content-Type': 'application/json'
                })
            }
        ).toPromise();

        console.log(result.token);

        localStorage.setItem('token', result.token);

        this.userLoggedIn = true;

        this.router.navigate(['dashboard']);

        this.loginForm.reset();
    }

    resetPassword() {
        alert('Reset Password');
    }
=======
  resetPassword(): void {
    const dialogRef = this.dialog.open(ResetPasswordModalComponent, {
      width: '350px',
      data: {password: this.password, email: this.email}
    });
  }
>>>>>>> 0762982c4af1476fc2dd8bfea369842816db619f
}
