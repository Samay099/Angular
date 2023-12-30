import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<label for = "text">Text Field</label>
            <input type = "text" name = "text" [class] = "'TextField'"/>
            <h2 [class] = "'StaticText'">Marvellous Infosystems</h2>
  
            <router-outlet></router-outlet>`,
  styles: ['.StaticText{color: blue;}.TextField{color: red;}']
})
export class AppComponent {
  title = 'Static_Text_Field';
}
