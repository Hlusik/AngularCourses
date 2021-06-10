// import { HttpClient } from '@angular/common/http';
// import { Inject, Injectable } from '@angular/core';
// import { LoginAPI, LogoutAPI, RegisterAPI } from '../auth.config';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(
//     private http: HttpClient,
//     @Inject(LoginAPI) private loginUrl: string,
//     @Inject(RegisterAPI) private registerUrl: string,
//     @Inject(LogoutAPI) private logoutUrl: string
//   ) { }

//   login(username: string, password: string) {
//     return this.http.post<any>(`/users/authenticate`, { username, password })
//         .pipe(map(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('currentUser', JSON.stringify(user));
//             this.currentUserSubject.next(user);
//             return user;
//         }));
// }

// logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
// }
// }
