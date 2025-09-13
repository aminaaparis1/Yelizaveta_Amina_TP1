import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.html',
  styleUrls: ['./carre.scss']
})
export class Carre {
  @Output() backgroundChange: EventEmitter<string> = new EventEmitter();

  changeBackground(color: string) {
    this.backgroundChange.emit(color);
  }
}
