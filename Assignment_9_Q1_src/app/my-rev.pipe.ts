import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string 
  {
      var Temp : string = "";
      {
        for(let char of value)
        {
          Temp = char + Temp;
        }

      }
      return Temp;
  }

}
