import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit(): void {
   // this.authorsToString = this.convertArrayToString(this.course.authors);
  }

}
