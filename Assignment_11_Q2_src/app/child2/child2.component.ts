import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers : [StringService]
})
export class Child2Component 
{
    UpperCase : number = 0;
    Str : string = "Number and String Services"

    constructor(private obj : StringService)
    {
      this.UpperCase = this.obj.CountCapital(this.Str)
    }
}
