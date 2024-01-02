import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFaliure]',
  standalone: true
})
export class CompFaliureDirective {

  constructor(private obj : ElementRef) 
  {}

  @HostListener('mouseenter')onmouseenter()
  {
    this.obj.nativeElement.style.color = 'Red';
  }
  @HostListener('mouseleave')onmouseleave()
  {
    
    this.obj.nativeElement.style.color = 'Black';
  }

}
