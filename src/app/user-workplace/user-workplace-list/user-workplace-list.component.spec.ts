import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserWorkplaceListComponent } from './user-workplace-list.component';

describe('UserWorkplaceListComponent', () => {
  let component: UserWorkplaceListComponent;
  let fixture: ComponentFixture<UserWorkplaceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkplaceListComponent ]
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
