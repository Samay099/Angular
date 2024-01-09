import { Component } from '@angular/core';
import { ArithematicService } from '../arithematic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithematicService]
})
export class DemoComponent 
{
    Value1 : number = 0;
    Value2 : number = 0;

    constructor(private obj : ArithematicService)
    {
        this.Value1 = this.obj.Add(11,10) 
        this.Value2 = this.obj.Sub(11,10)
    }
}
