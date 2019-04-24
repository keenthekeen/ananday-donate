import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'ผ่าน' : 'ไม่ผ่าน';
  }

}
