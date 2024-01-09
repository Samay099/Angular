import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(Data : string) : number
  {
     var Cnt : number = 0;
     var UpperCase : number = 0;
     var Str : string[] = Data.split(''); 
     for(Cnt = 0; Cnt < Str.length; Cnt++)
     {
        if((Str[Cnt] >= 'A') && (Str[Cnt] <= 'Z'))
        {
          UpperCase++;
        }
     }

     return UpperCase
  }


}
