import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlignt]'
})
export class HighligntDirective {

  constructor(
    elememt: ElementRef
  ) { 
    elememt.nativeElement.style.backgroundColor = 'red'
   }

}
