import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchPlaceHolder: string;
  searchValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(form: FormGroup) {
    console.log(JSON.stringify(form.value));
  }

}
