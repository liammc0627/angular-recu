import { Routes } from '@angular/router';
import { EventsShow } from './events-show/events-show';
import { EventoAdd } from './evento-add/evento-add';

export const routes: Routes = [
  { path: 'eventos', component: EventsShow },
  { path: 'eventos/add', component: EventoAdd },
  { path: '', redirectTo: '/eventos', pathMatch: 'full' },
];
