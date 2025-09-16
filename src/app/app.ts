import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Carre } from './carre/carre';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, Carre],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  public backgroundColor: string = 'white';

  public setBackground(color: string): void {
    this.backgroundColor = color;
  }
}
