import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  @Input() public backgroundClass: string = '';
  @Input() public textClass: string = '';
  @Input() public sizeClass: string = '';
}
