import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  pure: true
})
export class DurationPipe implements PipeTransform {

  transform(minutes: number): unknown {
    let hours = Math.floor(minutes / 60) < 10 ? `0${Math.floor(minutes / 60)}` : `${Math.floor(minutes / 60)}`;
    let min = minutes % 60 < 10 ? `0${minutes % 60}` : `${minutes % 60}`;
    return `${hours} : ${min} hours`;
  }

}
