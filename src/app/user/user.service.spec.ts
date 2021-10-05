import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

describe('UserService', () => {
  let service: UserService;
  let mockHttp: HttpTestingController;

  let dummyUsers = [
    { id: 1, name: "John", email: "example@email.com", age: 25 },
    { id: 2, name: "Peter", email: "example@email.com", age: 34 },
    { id: 3, name: "Simon", email: "example@email.com", age: 19 },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make get request', () => {
    service.getUsers().subscribe();
    
    const req = mockHttp.expectOne(`${apiUrl}/users`);
    req.flush(dummyUsers);

    expect(req.request.method).toBe("GET");
  });

  it('should return users count correctly', () => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(3);
    });

    const req = mockHttp.expectOne(`${apiUrl}/users`);
    req.flush(dummyUsers);
  });
  
});
