import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'minutesFormat'
})
export class MinutesFormatPipe implements PipeTransform {
  transform(value: number): string | number {
    if (value < 10) {
      return `0${value}`
    } else {
      return value;
    }
  }
}
