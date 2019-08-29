import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    userLoggedIn: boolean;

    constructor( private builder: FormBuilder, private http: HttpClient, private router: Router) { }

    ngOnInit() {
        this.loginForm = this.builder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
        });
    }


    async login() {
        console.log(this.loginForm.value);

        const loginURL = 'https://localhost:44321/api/auth/login';

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
}
