import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {

  constructor(private el:ElementRef) { }
  @Output() public clickedOutside = new EventEmitter();
  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    const clickInside = this.el.nativeElement.contains(target);
    if (!clickInside) {
      this.clickedOutside.emit(target);
    }
  }

}
