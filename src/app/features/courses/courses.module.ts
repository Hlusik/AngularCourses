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
    MatCardModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
