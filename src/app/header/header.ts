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
  @Input() public sizeClass: string = '';
  @Input() public backgroundClass: string = '';
  @Input() public textClass: string = '';
}
