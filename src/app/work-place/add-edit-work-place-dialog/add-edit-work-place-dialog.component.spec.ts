import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWorkPlaceDialogComponent } from './add-edit-work-place-dialog.component';

describe('AddEditWorkPlaceDialogComponent', () => {
  let component: AddEditWorkPlaceDialogComponent;
  let fixture: ComponentFixture<AddEditWorkPlaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditWorkPlaceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditWorkPlaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
