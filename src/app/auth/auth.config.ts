import { InjectionToken } from '@angular/core';

export const LoginAPI = new InjectionToken<string>('LoginAPI', {
    providedIn: 'any',
    factory: () => 'http://localhost:3000/login'
});

export const RegisterAPI = new InjectionToken<string>('RegisterAPI', {
    providedIn: 'any',
    factory: () => 'http://localhost:3000/register'
});

export const LogoutAPI = new InjectionToken<string>('LogoutAPI', {
    providedIn: 'any',
    factory: () => 'http://localhost:3000/logout'
});