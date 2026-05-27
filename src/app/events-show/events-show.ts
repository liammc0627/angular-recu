import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Evento } from '../i-event';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { EventoItem } from '../evento-item/evento-item';
import { EventoAdd } from '../evento-add/evento-add';
import { EventosService } from '../services/evento';

@Component({
  selector: 'app-events-show',
  imports: [FormsModule, AsyncPipe, EventFilterPipe, EventoItem, EventoAdd],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {

  search: string = '';
  events$: Observable<Evento[]>;

  constructor(private eventoService: EventosService) {
    this.events$ = this.eventoService.getEventos();
  }

  onEventAdded() {
    this.events$ = this.eventoService.getEventos();
  }

  deleteEvento() {
    this.events$ = this.eventoService.getEventos();
  }

  orderDate() {
    this.search = '';
    this.events$ = this.eventoService.getEventos().pipe(
      map(events => [...events].sort((a, b) => a.date.localeCompare(b.date)))
    );
  }

  orderPrice() {
    this.search = '';
    this.events$ = this.eventoService.getEventos().pipe(
      map(events => [...events].sort((a, b) => a.price - b.price))
    );
  }
}
