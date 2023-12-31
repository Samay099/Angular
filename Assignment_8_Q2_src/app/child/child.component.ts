import { Component, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
    @Input() public Input : any;
    @Output() public Emitter = new EventEmitter();

    public SendMessage()
    {
        this.Emitter.emit("Hello from Child...");
    }

}
