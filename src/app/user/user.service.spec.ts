import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

const usersApiUrl = `${environment.apiUrl}/users`;

describe('UserService', () => {
  let service: UserService;
  let mockHttp: HttpTestingController;

  let dummyUsers = [
    { id: 1, name: "John", email: "john@mail.com", age: 20 },
    { id: 2, name: "Peter", email: "peter@mail.com", age: 25 },
    { id: 3, name: "Simon", email: "simon@mail.com", age: 30 },
  ];

  let dummyUser = {
    firstName: "John",
    lastName: 'Doe',
    email: "john@email.com",
    dateOfBirth: '22-11-2000'
  };

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

  it('should make get request when getUsers method is called', () => {
    service.getUsers().subscribe();

    const req = mockHttp.expectOne(usersApiUrl);

    expect(req.request.method).toBe("GET");
  });

  it('should return users count correctly when getUsers method is called', () => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(3);
    });

    mockHttp.expectOne(usersApiUrl).flush(dummyUsers);
  });

  it('should return users correctly when getUsers method is called', () => {
    service.getUsers().subscribe(users => {
      expect(users).toEqual(dummyUsers);
    });

    mockHttp.expectOne(usersApiUrl).flush(dummyUsers);
  });

  it('should make get request when getUser method is called', () => {
    service.getUser(1).subscribe();

    const req = mockHttp.expectOne(`${usersApiUrl}/1`);

    expect(req.request.method).toBe("GET");
  });

  it('should return user correctly when getUser method is called', () => {
    service.getUser(1).subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    mockHttp.expectOne(`${usersApiUrl}/1`).flush(dummyUser);
  });

  it('should make post request when createUser method is called', () => {
    service.createUser(dummyUser).subscribe();

    const req = mockHttp.expectOne(usersApiUrl);

    expect(req.request.method).toBe("POST");
  });

  it('should make put request when editUser method is called', () => {
    service.editUser(1, dummyUser).subscribe();

    const req = mockHttp.expectOne(`${usersApiUrl}/1`);

    expect(req.request.method).toBe("PUT");
  });

  it('should make delete request when deleteUser method is called', () => {
    service.deleteUser(1).subscribe();

    const req = mockHttp.expectOne(`${usersApiUrl}/1`);

    expect(req.request.method).toBe("DELETE");
  });

});
