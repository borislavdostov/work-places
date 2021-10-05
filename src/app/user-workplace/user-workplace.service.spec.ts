import { TestBed } from '@angular/core/testing';
import { UserWorkplaceService } from './user-workplace.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('UserWorkplaceService', () => {
  let service: UserWorkplaceService;
  let mockHttp: HttpTestingController;

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
