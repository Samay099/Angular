import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent 
{
  public Books : string [] = [
    'Angular : Angular Up and Running',
    'Node JS :Learning Node: Moving to the Server-Side by Shelley Powers', 
    'Android : Head First Android Development', 
    'Big data : Big Data By Viktor Mayer', 
    'Artificial Intelligence : Artificial Intelligence: A Modern Approach' 
  ]  
}
