import { FormControl } from '@angular/forms';
import { NameValidatorDirective } from './name-validator.directive';

describe('NameValidatorDirective', () => {

  let directive: NameValidatorDirective;

  beforeEach(() => {
    directive = new NameValidatorDirective();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should return null when name is valid', () => {
    let formControl = new FormControl('John');

    expect(directive.validate(formControl)).toEqual(null);
  });

  it('should return object with nameValidator', () => {
    let formControl = new FormControl('john');

    expect(directive.validate(formControl)).toEqual({ nameValidator: true });
  });

  it('should return null when name is empty string', () => {
    let formControl = new FormControl('');

    expect(directive.validate(formControl)).toEqual(null);
  });
});
