import { TestBed } from '@angular/core/testing';
import { UserWorkplaceService } from './user-workplace.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('UserWorkplaceService', () => {
  let service: UserWorkplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserWorkplaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
