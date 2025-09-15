import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carre',
  standalone: true,
  templateUrl: './carre.html',
  styleUrls: ['./carre.scss']
})
export class Carre {
  @Output() backgroundChange = new EventEmitter<string>();

  changeBackground(color: string) {
    this.backgroundChange.emit(color);
  }
}
