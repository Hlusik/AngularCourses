import { Injectable } from '@angular/core';
import { Author } from 'src/app/shared/components/models/author';
import { Course } from 'src/app/shared/components/models/course';

const mockedCourseList = [
  new Course(
    "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
    "JavaScript",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
    new Date(2021, 3, 8),
    160,
    ["Vasiliy Dobkin", "Nicolas Kim"],
  ),
  new Course(
    "b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
    "Angular",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.`,
    new Date(2020, 11, 10),
    210,
    ["Anna Sidorenko", "Valentina Larina"],
  ),
];
const coursesPromise = Promise.resolve(mockedCourseList);

const mockedAuthorsList = [
  new Author(
    1,
    "Vasiliy Dobkin"
  ),
  new Author(
    2,
    "Nicolas Kim"
  ),
  new Author(
    3,
    "Anna Sidorenko"
  ),
  new Author(
    4,
    "Valentina Larina"
  )
];
const authorsPromise = Promise.resolve(mockedAuthorsList);

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses(): Promise<Course[]> {
    return coursesPromise;
  }

  getAuthors(): any {
    return authorsPromise;
  }
}
