import { Component } from '@angular/core';
import { Footer } from './footer/footer';
import {Header} from "./header/header";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer],              
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
