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

  it('should make get request when getUsers is called', () => {
    service.getUsers().subscribe();

    const req = mockHttp.expectOne(`${apiUrl}/users`);
    req.flush(dummyUsers);

    expect(req.request.method).toBe("GET");
  });

  it('should return users count correctly when getUsers is called', () => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(3);
    });

    mockHttp.expectOne(`${apiUrl}/users`).flush(dummyUsers);
  });

  it('should return users correctly when getUsers is called', () => {
    service.getUsers().subscribe(users => {
      expect(users).toEqual(dummyUsers);
    });

    mockHttp.expectOne(`${apiUrl}/users`).flush(dummyUsers);
  });

  it('should make get request when getUser is called', () => {
    service.getUser(1).subscribe();

    const req = mockHttp.expectOne(`${apiUrl}/users/1`);
    req.flush(dummyUsers);

    expect(req.request.method).toBe("GET");
  });

  it('should return user correctly when getUser is called', () => {
    let user = { firstName: "John", lastName: 'Smith', email: "example@email.com", dateOfBirth: '22-11-2000' };

    service.getUser(1).subscribe(user => {
      expect(user).toEqual(user);
    });

    mockHttp.expectOne(`${apiUrl}/users/1`).flush(user);
  });

  it('should make post request when createUser is called', () => {
    service.createUser({ firstName: '', lastName: '', email: '', dateOfBirth: '' }).subscribe();

    const req = mockHttp.expectOne(`${apiUrl}/users`);
    req.flush(dummyUsers);

    expect(req.request.method).toBe("POST");
  });

});
