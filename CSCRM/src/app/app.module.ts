import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidenavComponent } from './views/shared/sidenav/sidenav.component';
import { LoginComponent } from './views/shared/login/login.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { UsersComponent } from './views/admin/users/users.component';
import { StudentsComponent } from './views/admin/students/students.component';
import { EventsComponent } from './views/admin/events/events.component';
import { AcademyComponent } from './views/admin/academy/academy.component';
import { StudentInfoComponent } from './views/student/student-info/student-info.component';
import { InstructorInfoComponent } from './views/student/instructor-info/instructor-info.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    StudentsComponent,
    EventsComponent,
    AcademyComponent,
    StudentInfoComponent,
    InstructorInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
