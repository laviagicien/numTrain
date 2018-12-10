import { Directive, Renderer2, ElementRef, HostListener, ViewChildren, KeyValueDiffers } from '@angular/core';

@Directive({
  selector: '[appActiveState]'
})
export class ActiveStateDirective {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }
  
  @HostListener('click') mouseClick(eventData: Event){
    let elem = this.elRef.nativeElement;
    let sibling :Element= elem.parentNode;
    let allSiblings= sibling.children;
    for(let s = 0 ; s < allSiblings.length ; s++){
      allSiblings.item(s).classList.remove('active');
    }
    this.renderer.addClass(elem, 'active');
  }
}
