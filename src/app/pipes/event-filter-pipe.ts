import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from '../i-event';

@Pipe({
  name: 'eventFilter',
})
export class EventFilterPipe implements PipeTransform {

  transform(events: Evento[], filterBy: string): Evento[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter
      ? events.filter(e =>
          e.title.toLocaleLowerCase().includes(filter) ||
          e.description.toLocaleLowerCase().includes(filter)
        )
      : events;
  }

}
