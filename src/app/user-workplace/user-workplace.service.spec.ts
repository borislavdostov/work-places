import { TestBed } from '@angular/core/testing';
import { UserWorkplaceService } from './user-workplace.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('UserWorkplaceService', () => {
  let service: UserWorkplaceService;
  let mockHttp: HttpTestingController;

  let dummyUserWorkplaces = [
    { id: 1, user: 'John', workplace: 'Web Developer', fromDate: '12-10-2014', toDate: '16-10-2023' },
    { id: 2, user: 'Peter', workplace: 'QA Specialist', fromDate: '22-8-2018', toDate: '31-10-2021' },
    { id: 3, user: 'Simon', workplace: 'Mobile Developer', fromDate: '3-7-2019', toDate: '3-3-2024' },
  ];

  let dummyUserWorkplace = {
    userId: 1,
    workplaceId: 2,
    fromDate: '1-8-2014',
    toDate: '14-12-2024'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserWorkplaceService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
