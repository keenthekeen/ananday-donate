import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receiptPrepare'
})
export class ReceiptPreparePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return 'tracking.details.receipt_prepared';
    } else {
      return 'tracking.details.receipt_not_prepared';
    }
  }

}
