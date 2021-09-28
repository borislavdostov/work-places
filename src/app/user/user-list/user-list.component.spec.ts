import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let mockUserService: any;
  let users: IUser[];

  beforeEach(async () => {
    users = [
      { id: 1, name: 'Rick Grimes', age: 41, email: 'r.grimes@gmail.com' },
      { id: 2, name: 'Paul Walker', age: 23, email: 'p.walker@gmail.com' },
      { id: 3, name: 'Steven Gerrard', age: 47, email: 'steve.g@gmail.com' },
    ]
    mockUserService = jasmine.createSpyObj(['getUsers', 'getUser', 'createUser', 'editUser', 'deleteUser']);
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [MatSnackBarModule, MatDialogModule],
      providers: [
        { provide: UserService, useValue: mockUserService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set users correctly from the service', () => {
    mockUserService.getUsers.and.returnValue(of(users));
    fixture.detectChanges();

    expect(fixture.componentInstance.users.length).toBe(3);
  });

  it('should set users title correctly', () => {
    mockUserService.getUsers.and.returnValue(of(users));
    fixture.detectChanges();

    expect(fixture.componentInstance.usersTitle).toEqual(`${users.length} Users`);
  });
});
