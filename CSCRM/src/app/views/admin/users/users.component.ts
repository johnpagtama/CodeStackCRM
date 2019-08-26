import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.builder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      role: ['Select A Role', Validators.required],
    });
  }

  get firstName() { return this.userForm.get('firstName'); }
  get middleName() { return this.userForm.get('middleName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get phone() { return this.userForm.get('phone'); }
  get email() { return this.userForm.get('email'); }

  addUser() {
    // TODO: Use EventEmitter with form value
    if (this.userForm.invalid || this.userForm.pristine) {
      // User should be shown invalid login message in this area
    } else {
      // This should add a user to the API
    }
  }
}
