import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidenavComponent } from './views/shared/sidenav/sidenav.component';
import { LoginComponent } from './views/shared/login/login.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { UsersComponent } from './views/admin/users/users.component';
import { StudentsComponent } from './views/admin/students/students.component';
import { EventsComponent } from './views/admin/events/events.component';
import { AcademyComponent } from './views/admin/academy/academy.component';
import { StudentInfoComponent } from './views/student/student-info/student-info.component';
import { InstructorInfoComponent } from './views/student/instructor-info/instructor-info.component';
import { AddEventModalComponent } from './views/shared/add-event-modal/add-event-modal.component';
import { EventInfoComponent } from './views/admin/event-info/event-info.component';

import { AuthGuardService } from './guards/auth-guard.service';

import { ResetPasswordModalComponent } from './views/shared/reset-password-modal/reset-password-modal.component';

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
    InstructorInfoComponent,
    AddEventModalComponent,
    EventInfoComponent,
    ResetPasswordModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule,
    FlexLayoutModule
  ],

  providers: [AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [
    ResetPasswordModalComponent
  ]
})
export class AppModule {}
