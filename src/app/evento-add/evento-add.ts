import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evento } from '../i-event';
import { EventosService } from '../services/evento';

@Component({
  selector: 'app-evento-add',
  imports: [FormsModule],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {
  @Output() eventAdded = new EventEmitter<Evento>();

  newEvent: Evento = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };

  constructor(private eventoService: EventosService) {}

  addEvent() {
    this.eventoService.addEvento({ ...this.newEvent }).subscribe({
      next: (evento) => {
        this.eventAdded.emit(evento);
        this.newEvent = { title: '', description: '', image: '', price: 0, date: '' };
      },
      error: (err) => console.error(err)
    });
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newEvent.image = reader.result as string;
    });
  }
}
