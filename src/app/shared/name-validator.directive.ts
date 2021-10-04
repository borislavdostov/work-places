import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[ngModel][nameValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true }]
})
export class NameValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = (control.value as string);
    if (!value) {
        return null;
    }
    const firstLetter = value.charAt(0);
    const isValidName = firstLetter == firstLetter.toUpperCase();
    return isValidName ? null : { nameValidator: true };
  }
}
