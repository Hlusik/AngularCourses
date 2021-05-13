import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/models/author';

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
      titleFormControl: new FormControl('', [Validators.required]),
      descriptionFormControl: new FormControl('', [Validators.required]),
      creationDateFormControl: new FormControl('', [Validators.required]),
      durationFormControl: new FormControl('', [Validators.required, CourseComponent.positiveVal]),
      authorsFormControl: new FormControl(''),
      allAuthorsFormControl: new FormControl(this.addedAuthors[0]),
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

  static positiveVal(control: AbstractControl):{ [key: string]: any; } {
    if (Number(control.value) <= 0) {
      return { positiveVal: { valid: false, value: control.value } };
    } else {
      return null;
    }
  }

}
