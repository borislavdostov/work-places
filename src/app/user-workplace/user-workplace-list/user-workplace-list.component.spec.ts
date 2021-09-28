import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { IUserWorkplace } from 'src/app/shared/interfaces/user-workplace';
import { UserWorkplaceService } from '../user-workplace.service';
import { UserWorkplaceListComponent } from './user-workplace-list.component';

describe('UserWorkplaceListComponent', () => {
  let component: UserWorkplaceListComponent;
  let fixture: ComponentFixture<UserWorkplaceListComponent>;
  let mockUserWorkplaceService: any;
  let userWorkplaces: IUserWorkplace[];

  beforeEach(async () => {
    userWorkplaces = [
      { id: 1, user: 'John Atanasov', workplace: 'QA Specialist', fromDate: '22-12-1785', todate: '22-12-1842' },
      { id: 2, user: 'Morgan Freeman', workplace: 'Mobile Developer', fromDate: '02-05-1992', todate: '13-01-2006' },
      { id: 3, user: 'Tom Cruise', workplace: 'Software Developer', fromDate: '24-12-2002', todate: '01-04-2021' }
    ];
    mockUserWorkplaceService = jasmine.createSpyObj(
      ['getUserWorkplaces', 'getUserWorkplaceOptions', 'getUserWorkplace', 'createUserWorkplace', 'editUserWorkplace', 'deleteUserWorkplace']);
    await TestBed.configureTestingModule({
      declarations: [UserWorkplaceListComponent],
      imports: [MatSnackBarModule, MatDialogModule],
      providers: [
        { provide: UserWorkplaceService, useValue: mockUserWorkplaceService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkplaceListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set user workplaces correctly from the service', () => {
    mockUserWorkplaceService.getUserWorkplaces.and.returnValue(of(userWorkplaces));
    fixture.detectChanges();

    expect(component.userWorkplaces.length).toBe(3);
  });

  it('should set user workplaces title correctly', () => {
    mockUserWorkplaceService.getUserWorkplaces.and.returnValue(of(userWorkplaces));
    fixture.detectChanges();

    expect(component.workplacesTitle).toEqual(`${userWorkplaces.length} Workplaces`);
  });
});
