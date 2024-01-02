import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mArvellousChk',
  standalone: true
})
export class MArvellousChkPipe implements PipeTransform {

  transform(value: number,Param : string): unknown 
  {
      if(Param == 'Even')
      {
          if((value % 2) == 0)
          {
            return "It is Even";
          }
          else
          {
            return "It is not Even";
          }
      }
      if(Param == 'Odd')
      {
          if((value % 2) != 0)
          {
            return "It is Odd";
          }
          else
          {
            return "It is not Odd";
          }
      }
      if(Param == "Prime")
      {
          if((value == 0) || (value == 1))
          {
            return "It is not prime";
          }

          var flag : boolean = false;
          var i : number = 0;
          for(i = 2; i <= value/2; i++)
          {
            if((value % i)== 0)
            {
              flag = true;
              break;
            }
          }
          if(flag == false)
          {
            return "It is prime";
          }
          else
          {
            return "It is not prime";
          }   
      }
      if(Param == 'Perfect')
      {
          var Fact : number = 0;
          var i : number = 0;
          for(i = 1; i <= value/2; i++)
          {
            if((value % i)== 0)
            {
              Fact = Fact + i;
            }
          }

          if(Fact == value)
          {
            return "It is a Perfect number";
          }
          else
          {
            return "It is not a Perfect Number";
          }
      }
      return null;
  }

}
