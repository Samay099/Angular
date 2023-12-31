import { Component, Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
    @Output() public Emitter = new EventEmitter();
    
    public Str : string = "";

    public SendMessage()
    {
        this.Emitter.emit(this.Str);
    }
}
