import { Directive, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appMyNewDirective]'
})
export class MyNewDirectiveDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
   }

}
