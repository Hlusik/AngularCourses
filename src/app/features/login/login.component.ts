import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      loginFormControl: new FormControl('', { validators: [Validators.pattern('[A-Za-z]+'), Validators.required ]}),
      passwordFormControl: new FormControl('', { validators: [Validators.pattern('[a-zA-Z|0-9]+[0-9|a-zA-Z]+'), Validators.minLength(6), Validators.required] }),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
