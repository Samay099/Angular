import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = "Button";
  public Str : string = "Marvellous Infosystems";

  @HostListener('click',['$event.target.id'])onClick(id : string)
  {
    console.log("Button clicked"+ id);
    if(id == "B1")
    {
        this.fun();
    }
    else if(id == "B2")
    {
      this.resetText();
    }
    
  }

  public fun() : string
  {
    this.Str = "Educating for Better tomorrow";
    return this.Str;
  } 

  public resetText() : string
  {
     this.Str = "Marvellous Infosystems";
     return this.Str;  
  }

  
}
