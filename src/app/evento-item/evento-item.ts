import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Evento } from '../i-event';
import { EventosService } from '../services/evento';

@Component({
  selector: 'app-evento-item',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './evento-item.html',
  styleUrl: './evento-item.css',
  host: { class: 'card' }
})
export class EventoItem {
  @Input() event!: Evento;
  @Output() deleteEvent = new EventEmitter<void>();

  constructor(private eventoService: EventosService) {}

  deleteEvento() {
    this.eventoService.deleteEvento(this.event.id!).subscribe({
      next: () => this.deleteEvent.emit(),
      error: (err) => console.error(err)
    });
  }
}
