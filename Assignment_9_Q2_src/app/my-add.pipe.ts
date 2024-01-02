import { VariableBinding } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number 
  {
      var Sum : number = 0;
      Sum = value + args[0];
      return Sum;
  }

}
