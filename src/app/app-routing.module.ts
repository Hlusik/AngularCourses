import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './features/login/login.component';
import { CoursesComponent } from './features/courses/courses.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { CourseComponent } from './features/course/course.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: CoursesComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'courses/add',
    component: CourseComponent
  },
  {
    path: 'course/:id',
    component: CourseComponent
  },
  {
    path: 'courses/edit/:id',
    component: CourseComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
