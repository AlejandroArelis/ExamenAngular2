import { AbstractControl, ValidationErrors } from "@angular/forms"

export const UsernameValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';
  let errors: ValidationErrors = {};
  let hasErrors = false;

  if (value.length > 20) {
    errors['lengthError'] = "Máximo 20 caracteres";
    hasErrors = true;
  }

  let basicCharacters = /^[A-Z0-9Ñ]+$/g
  if (basicCharacters.test(value) === false) {
    errors['basicCharacters'] = "Solo se admiten letras y numeros";
    hasErrors = true;
  }

  if (hasErrors) {
    return errors;
  } else {
    return null;
  }
}