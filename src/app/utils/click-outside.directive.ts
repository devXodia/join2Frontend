import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[clickedOutsideDirective]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() clickedOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target) return;

    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (!clickedInside) {
      this.clickedOutside.emit();
    }
  }
}
