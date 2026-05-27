import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Evento } from '../i-event';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  private eventosEndpoint = 'https://my-json-server.typicode.com/liammc0627/angular-recu/eventos';

  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.eventosEndpoint).pipe(
      catchError((resp: HttpErrorResponse) => {
        console.error(resp);
        return throwError(() => new Error(`Error obteniendo eventos. Código: ${resp.status}`));
      })
    );
  }

  addEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.eventosEndpoint, evento).pipe(
      catchError((resp: HttpErrorResponse) => {
        console.error(resp);
        return throwError(() => new Error(`Error añadiendo evento. Código: ${resp.status}`));
      })
    );
  }

  deleteEvento(id: string): Observable<any> {
    return this.http.delete(`${this.eventosEndpoint}/${id}`).pipe(
      catchError((resp: HttpErrorResponse) => {
        console.error(resp);
        return throwError(() => new Error(`Error borrando evento. Código: ${resp.status}`));
      })
    );
  }
}
