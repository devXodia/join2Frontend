import { Component, signal, WritableSignal } from '@angular/core';
import { ClickOutsideDirective } from '../../../utils/click-outside.directive';

@Component({
  selector: 'toolbar',
  imports: [ClickOutsideDirective],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {
  showDropdown: WritableSignal<boolean> = signal(false);
  constructor() {}

  toggleDropdownContainer() {
    this.showDropdown.set(!this.showDropdown());
  }

  closeDropdown() {
    this.showDropdown.set(false);
  }

  // TODO: Add routing to correct links/components & logout functionality
}
