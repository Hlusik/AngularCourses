import { InjectionToken } from '@angular/core';

export const AuthorsAPI = new InjectionToken<string>('AuthorsAPI', {
    providedIn: 'any',
    factory: () => 'http://localhost:3000/authors'
});

export const CoursesAPI = new InjectionToken<string>('CoursesAPI', {
    providedIn: 'any',
    factory: () => 'http://localhost:3000/courses'
});