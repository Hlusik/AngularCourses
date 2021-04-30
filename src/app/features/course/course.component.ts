import { Course } from '../../shared/components/models/course';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
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
