import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordModalComponent } from '../reset-password-modal/reset-password-modal.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginEmail: string;
  password: string;
  email: string;


  constructor( private builder: FormBuilder, private router: Router, private dialog: MatDialog ) { }

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

  resetPassword(): void {
    const dialogRef = this.dialog.open(ResetPasswordModalComponent, {
      width: '350px',
      data: {password: this.password, email: this.email}
    });
  }
}
