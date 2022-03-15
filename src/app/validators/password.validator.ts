import { AbstractControl, ValidationErrors } from "@angular/forms"

export const PasswordValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';
  let errors:ValidationErrors = {};
  let hasErrors = false;

  if(value == ''){ 
    return null;
  }

  let upperCaseCharacters = /[A-Z]+/g
  if (upperCaseCharacters.test(value) === false) {
    errors['upperCaseError'] = "Al menos una mayúscula";
    hasErrors = true;
  }

  let lowerCaseCharacters = /[a-z]+/g
  if (lowerCaseCharacters.test(value) === false) {
    errors['lowerCaseError'] = "Al menos una minúscula";
    hasErrors = true;
  }


  let numberCharacters = /[0-9]+/g
  if (numberCharacters.test(value) === false) {
    errors['numberError'] = "Al menos un número";
    hasErrors = true;
  }

  if (value.length < 6) {
    errors['lengthError'] = "Al menos 6 caracteres";
    hasErrors = true;
  }

  if(hasErrors) {
    return errors;
  } else {
    return null;
  }
}