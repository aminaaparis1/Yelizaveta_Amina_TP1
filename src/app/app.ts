import { Component } from '@angular/core';
import {Header} from "./header/header";
import {Carre} from './carre/carre';
import {Footer} from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header, Carre, Footer

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  public style: string = "color"
  public footer: string = "footer"
  public backgroundColor: string = '';

  setBackground(color: string) {
    this.backgroundColor = color;
  }


}

