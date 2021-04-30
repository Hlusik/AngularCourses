import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/components/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  items: Promise<Course[]>;
  title: string = 'Your list is empty';
  text: string = 'Please use the "Add new course" button to add your first course';
  buttonText: string = 'Add new course';

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.items = this.courseService.getCourses();
  }

}
