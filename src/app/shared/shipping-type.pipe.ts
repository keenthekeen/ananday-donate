import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shippingType'
})
export class ShippingTypePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value === 'registered') {
      return 'common.shipping_type.registered';
    } else {
      return 'common.shipping_type.normal';
    }
  }
}
