import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  registrationFrom: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationFrom = fb.group({
      email: new FormControl('', { validators:[Validators.required]}),
      name: new FormControl('', { validators: [Validators.minLength(6), Validators.required ]}),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
