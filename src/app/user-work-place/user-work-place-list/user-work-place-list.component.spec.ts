import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkPlaceListComponent } from './user-work-place-list.component';

describe('UserWorkPlaceListComponent', () => {
  let component: UserWorkPlaceListComponent;
  let fixture: ComponentFixture<UserWorkPlaceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkPlaceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkPlaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
