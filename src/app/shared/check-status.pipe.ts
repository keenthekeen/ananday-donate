import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkStatus'
})
export class CheckStatusPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      if (value.pass) {
        return '/assets/02-check-pass.png';
      } else {
        return '/assets/03-check-fail.png';
      }
    } else {
      return '/assets/02-check-pass.png';
    }
  }
}
