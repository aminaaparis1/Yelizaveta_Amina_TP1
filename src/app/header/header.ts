import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgClass
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() color: string = "";

}
