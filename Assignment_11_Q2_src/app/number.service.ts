import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(No : number) : string
  {
    var Cnt : number = 0;
    var Flag : boolean = false;
    var Str : string = '';

    for(Cnt = 2;Cnt < No/2 ;Cnt++)
    {
      if((No % 2) == 0)
      {
        Flag = true;
        break;
      }
    }

    if(Flag == true)
    {
      Str = No+" is not a Prime Number";
      return Str;
    }
    else
    {
      Str = No+" is not a Prime Number";
      return Str;
    }
  }

}
