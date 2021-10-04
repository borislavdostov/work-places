import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingWentWrongComponent } from './something-went-wrong.component';

describe('SomethingWentWrongComponent', () => {
  let component: SomethingWentWrongComponent;
  let fixture: ComponentFixture<SomethingWentWrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SomethingWentWrongComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingWentWrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show component if show property is false', () => {
    component.show = false;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div')).toBeNull();
  });

  it('should show component if show property is true', () => {
    component.show = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div')).not.toEqual(null);
  });

  it('should set something went wrong component title correctly', () => {
    component.show = true;
    component.message = 'getting users';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('p').textContent).toContain('getting users');
  });

  it('should call onTryAgainClick method when try again button is clicked', () => {
    component.show = true;
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    spyOn(component, 'onTryAgainClick');

    button.click();

    expect(component.onTryAgainClick).toHaveBeenCalled();
  });
});
