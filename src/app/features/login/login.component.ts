import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  user: User = new User();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm): void {
    console.log(`Saved: ${JSON.stringify(loginForm.value)}`);
  }

}
