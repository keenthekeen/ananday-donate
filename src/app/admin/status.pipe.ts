import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value.check) {
      return 'ลงทะเบียนใหม่';
    } else {
      if (!value.check.pass) {
        return 'ตรวจสอบไม่ผ่าน';
      } else {
        if (value.register.badge_amount === 0 || value.badge_shipping) {
          if (!value.register.receipt) {
            if (value.register.badge_amount === 0) {
              return 'เสร็จสิ้น - ไม่รับเข็มฯ และใบเสร็จฯ';
            } else {
              return 'เสร็จสิ้น - ไม่รับใบเสร็จฯ';
            }
          } else {
            if (!value.receipt) {
              return 'รอออกใบเสร็จฯ';
            } else {
              if (!value.receipt_shipping) {
                return 'รอจัดส่งใบเสร็จฯ';
              } else {
                return 'เสร็จสิ้น';
              }
            }
          }
        } else {
          if (!value.badge) {
            return 'รอเตรียมเข็มฯ';
          } else {
            return 'รอจัดส่งเข็มฯ';
          }
        }
      }
    }
  }
}
