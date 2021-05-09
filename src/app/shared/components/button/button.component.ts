import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonImgName: string;

  constructor() { }

  ngOnInit(): void {
  }

  onlogin(): void {

  }
}
