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
      emailFromControl: new FormControl('', { validators:[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email]}),
      nameFromControl: new FormControl('', { validators: [Validators.minLength(6), Validators.pattern('[A-Za-z]+'), Validators.required ]}),
      passwordFormControl: new FormControl('', { validators: [Validators.minLength(6), Validators.required] }),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
