import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Sidebar } from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'page-wrapper',
  imports: [Toolbar, Sidebar, RouterOutlet],
  templateUrl: './page-wrapper.html',
  styleUrl: './page-wrapper.scss',
})
export class PageWrapper {}
