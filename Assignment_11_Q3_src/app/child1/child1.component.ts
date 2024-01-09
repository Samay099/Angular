import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService,StringService]
})
export class Child1Component 
{
    Str1  : string = '';
    UpperCase : number = 0;
    Str2 : string = "Number and String Services"

    constructor(private obj1 : NumberService , private obj2 : StringService)
    {
        this.Str1 = this.obj1.ChkPrime(11);
        this.UpperCase = this.obj2.CountCapital(this.Str2)
    }    
}



