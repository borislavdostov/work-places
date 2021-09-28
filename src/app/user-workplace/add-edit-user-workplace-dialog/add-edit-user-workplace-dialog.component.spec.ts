import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AddEditUserWorkplaceDialogComponent } from './add-edit-user-workplace-dialog.component';

describe('AddEditUserWorkplaceDialogComponent', () => {
  let component: AddEditUserWorkplaceDialogComponent;
  let fixture: ComponentFixture<AddEditUserWorkplaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditUserWorkplaceDialogComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
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
