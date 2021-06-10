import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonImgName: string;
  @Input() routerLink: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick(): void {
    this.router.navigateByUrl(this.routerLink);
  }
}
