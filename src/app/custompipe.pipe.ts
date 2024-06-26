import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // return value.split('').reverse().join('');
    return value;
  }

} 
