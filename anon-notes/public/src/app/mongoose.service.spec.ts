import { TestBed, inject } from '@angular/core/testing';

import { MongooseService } from './mongoose.service';

describe('MongooseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongooseService]
    });
  });

  it('should be created', inject([MongooseService], (service: MongooseService) => {
    expect(service).toBeTruthy();
  }));
});
