import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/components/models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;

  durationHours: string;
  authorsToString: string;

  constructor() { }

  ngOnInit(): void {
    this.durationHours = this.convertMinutesToHours(this.course.duration);
    this.authorsToString = this.convertArrayToString(this.course.authors);
  }

  convertMinutesToHours(minutes: number) {
    return `${Math.floor(minutes / 60)} : ${minutes % 60} hours`;
  }

  convertArrayToString(array: string[]){
    return array.join(', ');
  }

}
