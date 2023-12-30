import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{ 
    Str : string = "Marvellous Infosystems";

    UpperCase()
    {
      this.Str = this.Str.toUpperCase();
      console.log(this.Str);
      return this.Str;
    }

    LowerCase()
    {
      this.Str = this.Str.toLowerCase();
      console.log(this.Str);
      return this.Str;
    }


}
