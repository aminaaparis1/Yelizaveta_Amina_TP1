import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carre',
  standalone: true,
  templateUrl: './carre.html',
  styleUrls: ['./carre.scss']
})
export class Carre {
  @Output() public backgroundChange: EventEmitter<string> = new EventEmitter<string>();

  public changeBackground(color: string): void {
    this.backgroundChange.emit(color);
  }
}
