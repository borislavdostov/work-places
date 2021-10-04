import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClearClick method when clear button is clicked', () => {
    fixture.debugElement.nativeElement.querySelector('input').value = 'text'
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    spyOn(component, 'onClearClick');

    button.click();

    expect(component.onClearClick).toHaveBeenCalled();
  });

  it('should clear filter input field when clear button is clicked', () => {
    fixture.debugElement.nativeElement.querySelector('input').value = 'text'
    fixture.detectChanges();

    let input = fixture.debugElement.nativeElement.querySelector('input');
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', input);

    expect(input.value).toEqual('');
  });

  it('should call applyFilter method on keyup event', () => {
    fixture.debugElement.nativeElement.querySelector('input').value = 'text'
    fixture.detectChanges();

    let input = fixture.debugElement.nativeElement.querySelector('input');
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', input);

    expect(input.value).toEqual('');
  });
});
