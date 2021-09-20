import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { nameValidator } from './validators';

@Directive({
  selector: '[ngModel][appNameValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true }]
})
export class NameValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return nameValidator(control);
  }
}
