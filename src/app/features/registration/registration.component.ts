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
      emailFromControl: new FormControl('', { validators:[Validators.required]}),
      nameFromControl: new FormControl('', { validators: [Validators.minLength(6), Validators.required ]}),
      passwordFormControl: new FormControl('', { validators: [Validators.required] }),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
