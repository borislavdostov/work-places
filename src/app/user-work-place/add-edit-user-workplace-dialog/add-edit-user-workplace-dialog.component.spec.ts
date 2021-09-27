import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserWorkPlaceDialogComponent } from './add-edit-user-workplace-dialog.component';

describe('AddEditUserWorkPlaceDialogComponent', () => {
  let component: AddEditUserWorkPlaceDialogComponent;
  let fixture: ComponentFixture<AddEditUserWorkPlaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUserWorkPlaceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUserWorkPlaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
