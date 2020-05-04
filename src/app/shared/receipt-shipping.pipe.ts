import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receiptShipping'
})
export class ReceiptShippingPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value
      ? 'tracking.details.receipt_shipped'
      : 'tracking.details.receipt_not_shipped';
  }
}
