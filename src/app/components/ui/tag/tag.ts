import { Component, input } from '@angular/core';

@Component({
  selector: 'tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {
  title = input<string>();
  color = input<string>();
}
