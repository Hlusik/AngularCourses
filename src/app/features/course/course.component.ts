import { CourseService } from './../services/course.service';
import { Course } from '../../shared/components/models/course';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/shared/components/models/author';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  hide = true;
  courseForm: FormGroup;
  authors: Promise<Author[]>;
  addedAuthors: Author[] = [];
  removedAuthors: Author[] = [];

  constructor(
    private authorService: CourseService
  ) { }

  ngOnInit(): void {
    this.authors = this.authorService.getAuthors();
    this.authors.then(data => this.addedAuthors = data.map(item => ({ ...item })));

    this.courseForm = new FormGroup({
      titleFormControl: new FormControl('', { validators: [Validators.required] }),
      descriptionFormControl: new FormControl('', { validators: [Validators.required] }),
      creationDateFormControl: new FormControl('', { validators: [Validators.required] }),
      durationFormControl: new FormControl('', { validators: [Validators.required] }),
      authorsFormControl: new FormControl('', { validators: [Validators.required] }),
      allAuthorsFormControl: new FormControl(this.addedAuthors[0], { validators: [Validators.required] }),
    });
  }

  onSubmit() {

  }

  onMoveRight() {
    let values = this.courseForm.controls['allAuthorsFormControl'].value;

    this.moveItems("right", values);
  }

  onMoveLeft() {
    let values = this.courseForm.controls['authorsFormControl'].value;

    this.moveItems("left", values);
  }

  moveItems(direction: string, values: []) {
    this.authors.then(data => {
      for (let j = 0; j < values.length; j++) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === values[j]) {
            if (direction === 'right') {
              this.removedAuthors = [...this.removedAuthors, data[i]];
              this.addedAuthors = this.addedAuthors.filter(item => item.id !== data[i].id );
            } else {
              this.addedAuthors = [...this.addedAuthors, data[i]];
              this.removedAuthors = this.removedAuthors.filter(item => item.id !== data[i].id );
            }
          }
        }
      }
    });
  }

}
