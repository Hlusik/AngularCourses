import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner'
})
export class StringJoinerPipe implements PipeTransform {

  transform(arr: Array<string>, separator: string): unknown {
    return arr.join(separator);
  }

}
