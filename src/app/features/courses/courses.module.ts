import { RegistrationModule } from './../registration/registration.module';
import { LoginModule } from './../login/login.module';
import { CourseModule } from './../course/course.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [CoursesComponent, CourseCardComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    SharedModule,
    MatCardModule,
    CourseModule,
    LoginModule,
    RegistrationModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
