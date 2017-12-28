import { TestBed, inject } from '@angular/core/testing';

import { DatabaseFirebaseService } from './database-firebase.service';

describe('DatabaseFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseFirebaseService]
    });
  });

  it('should be created', inject([DatabaseFirebaseService], (service: DatabaseFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
