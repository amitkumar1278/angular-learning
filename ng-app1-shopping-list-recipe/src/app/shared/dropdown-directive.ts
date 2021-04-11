import {Directive, HostListener, HostBinding, ElementRef, Renderer2} from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})

/*
export class DropdownDirective {
	
	@HostBinding('class.open') isOpen = false;

	@HostListener('click') toggleOpen() {
		this.isOpen = !this.isOpen;
	}
}*/

/*If you want that a dropdown can also be closed by a click anywhere outside 
(which also means that a click on one dropdown closes any other one, btw.), 
replace the code with below code. (placing the listener not on the dropdown, but on the document):*/
/*export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}*/

 

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

