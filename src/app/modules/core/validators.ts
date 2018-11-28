import { Validators as BaseValidators, ValidationErrors, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';

export class Validators extends BaseValidators {
  static equalsTo(formControlName: string): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return control.parent.get(formControlName).value === control.value
        ? of(null)
        : of({ equalsTo: true });
    };
  }
}
