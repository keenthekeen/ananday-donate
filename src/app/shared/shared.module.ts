import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingTypePipe } from './shipping-type.pipe';
import { ReceiptPipe } from './receipt.pipe';
import { CheckStatusPipe } from './check-status.pipe';
import { CheckStatusTextPipe } from './check-status-text.pipe';
import { BadgePreparePipe } from './badge-prepare.pipe';
import { BadgeShippingPipe } from './badge-shipping.pipe';
import { ReceiptPreparePipe } from './receipt-prepare.pipe';
import { ReceiptShippingPipe } from './receipt-shipping.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ShippingTypePipe,
    ReceiptPipe,
    CheckStatusPipe,
    CheckStatusTextPipe,
    BadgePreparePipe,
    BadgeShippingPipe,
    ReceiptPreparePipe,
    ReceiptShippingPipe
  ],
  exports: [
    ShippingTypePipe,
    ReceiptPipe,
    CheckStatusPipe,
    CheckStatusTextPipe,
    BadgePreparePipe,
    BadgeShippingPipe,
    ReceiptPreparePipe,
    ReceiptShippingPipe
  ]
})
export class SharedModule {}
