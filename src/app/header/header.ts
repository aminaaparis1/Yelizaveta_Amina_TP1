import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  @Input() sizeClass = 'header-size';
  @Input() backgroundClass = 'background-violet';
  @Input() textClass = 'white-text';
}
