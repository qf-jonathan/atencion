import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputRef]'
})
export class InputRefDirective {
  focus = false;
  element: ElementRef;

  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }

  constructor(element: ElementRef) {
    this.element = element;
  }
}
