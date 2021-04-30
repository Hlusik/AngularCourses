import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule
  ],
  exports: [CourseComponent]
})
export class CourseModule { }
