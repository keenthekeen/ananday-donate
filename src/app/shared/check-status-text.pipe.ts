import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkStatusText'
})
export class CheckStatusTextPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      if (value.pass) {
        return 'tracking.details.checked_pass';
      } else {
        return 'tracking.details.checked_fail';
      }
    } else {
      return 'tracking.details.not_checked';
    }
  }
}
