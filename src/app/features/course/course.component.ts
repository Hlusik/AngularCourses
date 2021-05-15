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
      titleFormControl: new FormControl('', [Validators.required]),
      descriptionFormControl: new FormControl('', [Validators.required]),
      creationDateFormControl: new FormControl('', [Validators.required]),
      durationFormControl: new FormControl(0, [Validators.required, Validators.min(0)]),
      newAuthorsFormControl: new FormControl('', [latinLettersAndNumbersValidation]),
      authorsFormControl: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  get formArr() {
    return this.courseForm.get('authorsFormControl') as FormArray;
  }

  authorList(str) {
    return this.fb.group({
      authorName: str
    });
  }

  addNewAuthor() {
    this.formArr.push(this.authorList(this.courseForm.get('newAuthorsFormControl').value));
  }

  deleteAuthor(index: number) {
    this.formArr.removeAt(index);
  }

}
