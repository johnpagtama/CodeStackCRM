import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public students: any = [];

  constructor(private builder: FormBuilder) {
      this.students =
      [
          {
              firstName: 'John',
              lastName: 'Pagtama',
              fullName:  'John Pagtama',
              schoolYear: '2018-2019',
              status: 'Admin',
              email: 'jpagtama@codestack.co',
              permissions: 'Add/Edit/Delete'
          },

          {
              firstName: 'Daniel',
              lastName: 'Hana',
              fullName:  'Daniel Hana',
              schoolYear: '2018-2019',
              status: 'Moderator',
              email: 'dhana@codestack.co',
              permissions: 'Add/Edit/Delete'
          },

          {
              firstName: 'Francisco',
              lastName: 'Cruz',
              fullName:  'Francisco Cruz',
              schoolYear: '2018-2019',
              status: 'Readonly',
              email: 'fcruz@codestack.co',
              permissions: 'View'
          },

          {
              firstName: 'Thomas',
              lastName: 'Huante',
              fullName:  'Thomas Huante',
              schoolYear: '2018-2019',
              status: 'Moderator',
              email: 'thuante@codestack.co',
              permissions: 'Add/Edit/Delete'
          },

          {
              firstName: 'Jose',
              lastName: 'Cabral',
              fullName:  'Jose Cabral',
              schoolYear: '2018-2019',
              status: 'Moderator',
              email: 'jcabral@codestack.co',
              permissions: 'Add/Edit/Delete'
          },

          {
              firstName: 'Joseph',
              lastName: 'Obligar',
              fullName:  'Joseph Obligar',
              schoolYear: '2018-2019',
              status: 'Moderator',
              email: 'jobligar@codestack.co',
              permissions: 'Add/Edit/Delete'
          },

          {
              firstName: 'Anthony',
              lastName: 'Mannor',
              fullName:  'Anthony Mannor',
              schoolYear: '2018-2019',
              status: 'Moderator',
              email: 'amannor@codestack.co',
              permissions: 'Add/Edit/Delete'
          },

          {
              firstName: 'Matthew',
              lastName: 'Hicks',
              fullName:  'Matthew Hicks',
              schoolYear: '2018-2019',
              status: 'Moderator',
              email: 'mhicks@codestack.co',
              permissions: 'Add/Edit/Delete'
          },

          {
              firstName: 'Arisabeth',
              lastName: 'Simphoukham',
              fullName:  'Arisabeth Simphoukham',
              schoolYear: '2018-2019',
              status: 'Moderator',
              email: 'asimphoukham@codestack.co',
              permissions: 'Add/Edit/Delete'
          },

          {
              firstName: 'Branton',
              lastName: 'James-Allen',
              fullName:  'Branton James-Allen',
              schoolYear: '2018-2019',
              status: 'Moderator',
              email: 'ballen@codestack.co',
              permissions: 'Add/Edit/Delete'
          },

          {
              firstName: 'Lincoln',
              lastName: 'MacKay',
              fullName:  'Lincoln MacKay',
              schoolYear: '2018-2019',
              status: 'Moderator',
              email: 'lmackay@codestack.co',
              permissions: 'Add/Edit/Delete'
          }
      ];
  }
  studentForm: FormGroup;
  ngOnInit() {
      this.studentForm = this.builder.group({
          FirstName: ['', Validators.required],
          MiddleName: [''],
          LastName: ['', Validators.required],
          Role: ['', Validators.required],
          Email: ['', Validators.required],
          Phone: ['', Validators.required],
          Password: ['', Validators.required],
        });
  }
}
