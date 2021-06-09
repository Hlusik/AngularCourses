import { DurationPipe } from './pipes/duration.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent } from './components';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DotDividedShortDatePipe } from './pipes/dot-divided-short-date.pipe';
import { StringJoinerPipe } from './pipes/string-joiner.pipe';

const Components = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  DurationPipe,
  DotDividedShortDatePipe,
  StringJoinerPipe
];

@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    FormsModule
  ],
  exports: Components
})
export class SharedModule { }
