import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoAdd } from './evento-add';

describe('EventoAdd', () => {
  let component: EventoAdd;
  let fixture: ComponentFixture<EventoAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
