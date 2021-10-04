import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
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
      ],
      schemas: [NO_ERRORS_SCHEMA]
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

  it('should set title correctly when data is not set', () => {
    let title = fixture.debugElement.nativeElement.querySelector('h1').textContent;

    expect(title).toEqual('Create Workplace');
  });

  it('should set title correctly when title is set', () => {
    component.title = 'Mat Dialog Title';
    fixture.detectChanges();

    let title = fixture.debugElement.nativeElement.querySelector('h1').textContent;

    expect(title).toEqual('Mat Dialog Title');
  });

  it('should set submit button title correctly when data is not set', () => {

    let title = fixture.debugElement.nativeElement.querySelector('button').textContent;

    expect(title).toEqual('Save');
  });
});
