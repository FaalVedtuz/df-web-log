import { TestBed, inject } from '@angular/core/testing';

import { RemindersDataService } from './reminders-data.service';

describe('RemindersDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemindersDataService]
    });
  });

  it('should be created', inject([RemindersDataService], (service: RemindersDataService) => {
    expect(service).toBeTruthy();
  }));
});
