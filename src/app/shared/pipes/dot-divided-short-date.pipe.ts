import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotDividedShortDate'
})
export class DotDividedShortDatePipe implements PipeTransform {

  transform(date: Date): unknown {
    return  `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
  }

}
