import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
    public students: any = [];

    constructor(private builder: FormBuilder) {
        this.students =
        [
            {
                firstName: 'John',
                lastName: 'Pagtama',
                fullName:  'John Pagtama',
                schoolYear: '2018-2019',
                status: 'current',
                email: 'jpagtama@codestack.co',
                phone: '2098985230'
            },

            {
                firstName: 'Daniel',
                lastName: 'Hana',
                fullName:  'Daniel Hana',
                schoolYear: '2018-2019',
                status: 'current',
                email: 'dhana@codestack.co',
                phone: '2098985230'
            },

            {
                firstName: 'Francisco',
                lastName: 'Cruz',
                fullName:  'Francisco Cruz',
                schoolYear: '2018-2019',
                status: 'current',
                email: 'fcruz@codestack.co',
                phone: '2098985230'
            },

            {
                firstName: 'Thomas',
                lastName: 'Huante',
                fullName:  'Thomas Huante',
                schoolYear: '2018-2019',
                status: 'current',
                email: 'thuante@codestack.co',
                phone: '2098985230'
            },

            {
                firstName: 'Jose',
                lastName: 'Cabral',
                fullName:  'Jose Cabral',
                schoolYear: '2018-2019',
                status: 'current',
                email: 'jcabral@codestack.co',
                phone: '2098985230'
            },

            {
                firstName: 'Joseph',
                lastName: 'Obligar',
                fullName:  'Joseph Obligar',
                schoolYear: '2018-2019',
                status: 'current',
                email: 'jobligar@codestack.co',
                phone: '2098985230'
            },

            {
                firstName: 'Anthony',
                lastName: 'Mannor',
                fullName:  'Anthony Mannor',
                schoolYear: '2018-2019',
                status: 'current',
                email: 'amannor@codestack.co',
                phone: '2098985230'
            },

            {
                firstName: 'Matthew',
                lastName: 'Hicks',
                fullName:  'Matthew Hicks',
                schoolYear: '2018-2019',
                status: 'current',
                email: 'mhicks@codestack.co',
                phone: '2098985230'
            },

            {
                firstName: 'Arisabeth',
                lastName: 'Simphoukham',
                fullName:  'Arisabeth Simphoukham',
                schoolYear: '2018-2019',
                status: 'current',
                email: 'asimphoukham@codestack.co',
                phone: '2098985230'
            },

            {
                firstName: 'Branton',
                lastName: 'James-Allen',
                fullName:  'Branton James-Allen',
                schoolYear: '2018-2019',
                status: 'current',
                email: 'ballen@codestack.co',
                phone: '2098985230'
            },

            {
                firstName: 'Lincoln',
                lastName: 'MacKay',
                fullName:  'Lincoln MacKay',
                schoolYear: '2018-2019',
                status: 'current',
                email: 'lmackay@codestack.co',
                phone: '2098985230'
            }
        ];
    }

    studentForm: FormGroup;
    ngOnInit() {
        this.studentForm = this.builder.group({
            FirstName: ['', Validators.required],
            MiddleName: [''],
            LastName: ['', Validators.required],
            BirthDate: [null, Validators.required],
            SchoolYear: ['', Validators.required],
            Status: ['', Validators.required],
            Address: ['', Validators.required],
            City: ['', Validators.required],
            State: ['', Validators.required],
            Email: ['', Validators.required],
            Phone: ['', Validators.required],
            password: ['', Validators.required],
          });
    }
}
