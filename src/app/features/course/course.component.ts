import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/models/author';
import { latinLettersAndNumbersValidation } from '../validators/validators';

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

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      creationDate: new FormControl('', [Validators.required]),
      duration: new FormControl(0, [Validators.required, Validators.min(0)]),
      newAuthors: new FormControl('', [latinLettersAndNumbersValidation]),
      authors: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  get formArr() {
    return this.courseForm.get('authors') as FormArray;
  }

  authorList(str) {
    return this.fb.group({
      authorName: str
    });
  }

  addNewAuthor() {
    this.formArr.push(this.authorList(this.courseForm.get('newAuthors').value));
  }

  deleteAuthor(index: number) {
    this.formArr.removeAt(index);
  }

}
