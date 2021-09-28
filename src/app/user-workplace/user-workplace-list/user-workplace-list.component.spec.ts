import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserWorkplaceListComponent } from './user-workplace-list.component';

describe('UserWorkplaceListComponent', () => {
  let component: UserWorkplaceListComponent;
  let fixture: ComponentFixture<UserWorkplaceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkplaceListComponent ],
      imports: [HttpClientTestingModule, MatSnackBarModule, MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkplaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
