import { Component } from '@angular/core';
import { EventsShow } from './events-show/events-show';

@Component({
  selector: 'app-root',
  imports: [EventsShow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
