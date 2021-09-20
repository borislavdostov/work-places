import { TestBed } from '@angular/core/testing';

import { UserWorkPlaceService } from './user-work-place.service';

describe('UserWorkPlaceService', () => {
  let service: UserWorkPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWorkPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
