import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    NgClass
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  @Input() footer: string = "";

}

