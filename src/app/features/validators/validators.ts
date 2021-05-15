import { AbstractControl, ValidationErrors } from "@angular/forms";

export function latinLettersAndNumbersValidation(control: AbstractControl): ValidationErrors | null {
    const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9_]*$/;
    const ALPHA_NUMERIC_VALIDATION_ERROR = { alphaNumericError: 'Only alpha numeric values are allowed' }

    return ALPHA_NUMERIC_REGEX.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
}

export function emailValidation(control: AbstractControl): ValidationErrors | null {
    const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const EMAIL_VALIDATION_ERROR = { alphaNumericError: 'Email is not correct' }

    return EMAIL_REGEX.test(control.value) ? null : EMAIL_VALIDATION_ERROR;
}