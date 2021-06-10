import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, publish, refCount, share, concatMap } from 'rxjs/operators';
import { Author } from '../models/author';
import { AuthorsAPI } from './service.config';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(
    private http: HttpClient,
    @Inject(AuthorsAPI) private authorsUrl: string
  ) { }

  getAllAuthors(): Observable<Author[]> {
    const url = `${this.authorsUrl}/all`;
    return this.http.get<Author[]>(url).pipe(
      retry(3),
      publish(),
      refCount(),
      catchError(this.handleError)
    );
  }

  addAuthor(author: Author): Observable<Author> {
    const url = `${this.authorsUrl}/add`;
    const body = JSON.stringify(author);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<Author>(url, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  editAuthor(author: Author): Observable<Author> {
    const url = `${this.authorsUrl}/${author.id}`;
    const body = JSON.stringify(author);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put<Author>(url, body, options)
      .pipe(catchError(this.handleError));
  }

  getAuthor(id: number): Observable<Author> {
    const url = `${this.authorsUrl}/${id}`;

    return this.http.get<Author>(url)
      .pipe(
        retry(3),
        share(), // = publish() + refCount()
        catchError(this.handleError)
      );
  }

  deleteAuthor(author: Author): Observable<Author[]> {
    const url = `${this.authorsUrl}/${author.id}`;

    return this.http.delete(url).pipe(
      concatMap(() => this.getAllAuthors()),
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
