import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badgeShipping'
})
export class BadgeShippingPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value
      ? 'tracking.details.badge_shipped'
      : 'tracking.details.badge_not_shipped';
  }
}
