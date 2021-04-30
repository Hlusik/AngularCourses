import { CourseModule } from './../course/course.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';



@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
