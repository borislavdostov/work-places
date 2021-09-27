import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserWorkplaceDialogComponent } from './add-edit-user-workplace-dialog.component';

describe('AddEditUserWorkplaceDialogComponent', () => {
  let component: AddEditUserWorkplaceDialogComponent;
  let fixture: ComponentFixture<AddEditUserWorkplaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUserWorkplaceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUserWorkplaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
