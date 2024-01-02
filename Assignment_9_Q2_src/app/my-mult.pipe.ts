import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number 
  {
      var Sum : number = 0;
      Sum = value + args[0];
      return Sum;
  }

}
