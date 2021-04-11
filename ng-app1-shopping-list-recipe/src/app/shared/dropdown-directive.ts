/*import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {
	
	@HostBinding('class.open') isOpen = false;

	@HostListener('click') toggleOpen() {
		this.isOpen = !this.isOpen;
	}
}*/



import {Directive, HostListener, HostBinding, ElementRef, Renderer2} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 
  constructor (private el: ElementRef, private renderer: Renderer2) {}
 
  @HostBinding('class.show') isOpen = false;
 
  @HostListener('click') toggleOpen() {
      this.isOpen = !this.isOpen;
      let part = this.el.nativeElement.querySelector('.dropdown-menu');
      if(this.isOpen)
        this.renderer.addClass(part, 'show');
      else
        this.renderer.removeClass(part, 'show');
  }
}