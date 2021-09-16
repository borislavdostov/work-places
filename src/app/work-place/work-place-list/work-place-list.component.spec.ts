import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPlaceListComponent } from './work-place-list.component';

describe('WorkPlaceListComponent', () => {
  let component: WorkPlaceListComponent;
  let fixture: ComponentFixture<WorkPlaceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPlaceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPlaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
