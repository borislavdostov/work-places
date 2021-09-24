import { AbstractControl, ValidationErrors } from "@angular/forms";

export function nameValidator(control: AbstractControl): ValidationErrors | null {
    const value = (control.value as string);
    if (!value) {
        return null;
    }
    const firstLetter = value.charAt(0);
    const isValidName = firstLetter == firstLetter.toUpperCase();
    return isValidName ? null : { nameValidator: true };
}