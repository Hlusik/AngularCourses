
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title: string = 'Your list is empty';
  text: string = 'Please use the "Add new course" button to add your first course';
  buttonText: string = 'Add new course';

  items$: Observable<Array<Course>>;

  constructor(
    // private courseService: CourseService
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CoursesService

  ) { }

  ngOnInit(): void {
    this.items$ = this.courseService.getAllCourses();
    console.log(this.items$);
  }

}
