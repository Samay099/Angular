import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService]
})
export class Child1Component 
{
    Str  : string = '';

    constructor(private obj : NumberService)
    {
        this.Str = this.obj.ChkPrime(11);
    }


}
