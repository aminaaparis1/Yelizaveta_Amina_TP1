import { Component } from '@angular/core';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer],              
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
