import { TestBed } from '@angular/core/testing';

import { UserWorkplaceService } from './user-workplace.service';

describe('UserWorkPlaceService', () => {
  let service: UserWorkplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWorkplaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
