import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receipt'
})
export class ReceiptPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      return 'common.receipt.yes';
    } else {
      return 'common.receipt.no';
    }
  }
}
