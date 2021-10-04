import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show loader when isLoading is false', () => {
    component.isLoading = false;
    fixture.detectChanges();

    let loader = fixture.debugElement.nativeElement.querySelector('mat-spinner');

    expect(loader).toBeNull();
  });

  it('should show loader when isLoading is true', () => {
    component.isLoading = true;
    fixture.detectChanges();

    let loader = fixture.debugElement.nativeElement.querySelector('mat-spinner');

    expect(loader).not.toEqual(null);
  });
});
