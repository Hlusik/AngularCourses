import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, publish, refCount, share, concatMap } from 'rxjs/operators';
import { Course } from '../models/course';
import { CoursesAPI } from './service.config';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient,
    @Inject(CoursesAPI) private coursesUrl: string
  ) { }

  getAllCourses(): Observable<Course[]> {
    const url = `${this.coursesUrl}/all`;

    return this.http.get<Course[]>(url).pipe(
      retry(3),
      publish(),
      refCount(),
      catchError(this.handleError)
    );
  }

  createCourse(course: Course): Observable<Course> {
    const url = `${this.coursesUrl}/add`;
    const body = JSON.stringify(course);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<Course>(url, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  editCourse(course: Course): Observable<Course> {
    const url = `${this.coursesUrl}/${course.id}`;
    const body = JSON.stringify(course);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put<Course>(url, body, options)
      .pipe(catchError(this.handleError));
  }

  getCourse(id: number): Observable<Course> {
    const url = `${this.coursesUrl}/${id}`;

    return this.http.get<Course>(url)
      .pipe(
        retry(3),
        share(), // = publish() + refCount()
        catchError(this.handleError)
      );
  }

  deleteCourse(course: Course): Observable<Course[]> {
    const url = `${this.coursesUrl}/${course.id}`;

    return this.http.delete(url).pipe(
      concatMap(() => this.getAllCourses()),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}