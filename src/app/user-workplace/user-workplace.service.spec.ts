import { TestBed } from '@angular/core/testing';
import { UserWorkplaceService } from './user-workplace.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;
const userWorkplacesApiUrl = `${apiUrl}/userworkplaces`;

describe('UserWorkplaceService', () => {
  let service: UserWorkplaceService;
  let mockHttp: HttpTestingController;

  let dummyUserWorkplaces = [
    { id: 1, user: 'John', workplace: 'Web Developer', fromDate: '12-10-2014', toDate: '16-10-2023' },
    { id: 2, user: 'Peter', workplace: 'QA Specialist', fromDate: '22-8-2018', toDate: '31-10-2021' },
    { id: 3, user: 'Simon', workplace: 'Mobile Developer', fromDate: '3-7-2019', toDate: '3-3-2024' },
  ];

  let dummyUserWorkplaceOptions = {
    users: [{ id: 1, name: 'Jack' }],
    workplaces: [{ id: 2, name: 'Web Developer' }]
  }

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

  it('should make get request when getUserWorkplaces is called', () => {
    service.getUserWorkplaces().subscribe();

    const req = mockHttp.expectOne(userWorkplacesApiUrl);

    expect(req.request.method).toBe("GET");
  });

  it('should return user workplaces count correctly when getUserWorkplaces is called', () => {
    service.getUserWorkplaces().subscribe(userWorkplaces => {
      expect(userWorkplaces.length).toBe(3);
    });

    mockHttp.expectOne(userWorkplacesApiUrl).flush(dummyUserWorkplaces);
  });

  it('should return user workplaces correctly when getUserWorkplaces is called', () => {
    service.getUserWorkplaces().subscribe(userWorkplaces => {
      expect(userWorkplaces).toEqual(dummyUserWorkplaces);
    });

    mockHttp.expectOne(userWorkplacesApiUrl).flush(dummyUserWorkplaces);
  });

  it('should make get request when getUserWorkplaceOptions is called', () => {
    service.getUserWorkplaceOptions().subscribe();

    const req = mockHttp.expectOne(`${userWorkplacesApiUrl}/options`);

    expect(req.request.method).toBe("GET");
  });

  it('should return user workplace options correctly when getUserWorkplaceOptionss is called', () => {
    service.getUserWorkplaceOptions().subscribe(userWorkplaceOptions => {
      expect(userWorkplaceOptions).toEqual(dummyUserWorkplaceOptions);
    });

    mockHttp.expectOne(`${userWorkplacesApiUrl}/options`).flush(dummyUserWorkplaceOptions);
  });

  it('should make get request when getUserWorkplace is called', () => {
    service.getUserWorkplace(1).subscribe();

    const req = mockHttp.expectOne(`${userWorkplacesApiUrl}/1`);

    expect(req.request.method).toBe("GET");
  });

});
