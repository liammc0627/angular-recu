import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsShow } from './events-show';

describe('EventsShow', () => {
  let component: EventsShow;
  let fixture: ComponentFixture<EventsShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
