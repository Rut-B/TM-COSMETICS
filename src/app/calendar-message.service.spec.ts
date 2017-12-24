import { TestBed, inject } from '@angular/core/testing';

import { CalendarMessageService } from './calendar-message.service';

describe('CalendarMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarMessageService]
    });
  });

  it('should be created', inject([CalendarMessageService], (service: CalendarMessageService) => {
    expect(service).toBeTruthy();
  }));
});
