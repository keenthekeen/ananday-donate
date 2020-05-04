import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badgePrepare'
})
export class BadgePreparePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      return 'tracking.details.badge_prepared';
    } else {
      return 'tracking.details.badge_not_prepared';
    }
  }
}
