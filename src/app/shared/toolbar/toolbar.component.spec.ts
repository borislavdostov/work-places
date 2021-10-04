import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set title correctly', () => {
    component.title = 'Toolbar Title';
    fixture.detectChanges();

    let title = fixture.debugElement.nativeElement.querySelector('h1').textContent;

    expect(title).toEqual('Toolbar Title');
  });

  it('should call buttonHandler method when New button is clicked', () => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    spyOn(component, 'buttonHandler');

    button.click();

    expect(component.buttonHandler).toHaveBeenCalled();
  });
});
