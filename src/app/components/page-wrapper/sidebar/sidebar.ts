import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  loggedIn: WritableSignal<boolean> = signal(true);

  //change what items are shown based on login Status
}
