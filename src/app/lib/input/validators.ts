import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { makeDate } from '../../core/common';

// create a static group




export const futureValidator = (control: AbstractControl): ValidationErrors | null => {
  // date is yyyy-mm-dd, should be int eh future
  const today = Date.now();

  if (!control.value) return null;
  const value = new Date(control.value);

  if (!value || +value > +today) {
    return null;
  }
  return {
    future: true
  };
};

// past validator
export const pastValidator = (control: AbstractControl): ValidationErrors | null => {
  // date is yyyy-mm-dd, should be int eh future
  const today = Date.now();

  if (!control.value) return null;
  const value = new Date(control.value);

  if (!value || +value < +today) {
    return null;
  }
  return {
    past: true
  };
};
export const pastValidatorFsn = (today: Date): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    // date is yyyy-mm-dd, should be int eh future
    // const today = Date.now();

    if (!control.value) return null;
    const value = new Date(control.value);

    if (!value || +value < +today) {
      return null;
    }
    return {
      past: true
    };
  };
};
export const matchPasswordFn = (pwd: AbstractControl): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    // get password and match, if equal return null
    if (control?.value === pwd?.value) {
      return null;
    }
    return {
      matchPassword: true
    };
  };
};
export const pastValidatorFn = (params: {date: string}): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const _date = makeDate(params.date);
    if(!_date) return null;

    const value = new Date(control.value);
    if (!value || +value < +_date) {
      return null;
    }
    return {
      past: true
    };
  };
};

export const dateRangeValidatorFn = (params: {minDate: string, maxDate?: string}): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    // make two dates if one is null, the other takes over, if both null, return null.
    const _min = makeDate(params.minDate);
    const _max = makeDate(params.maxDate);
    if (!_min && !_max) return null;

    // if both exist, range
    // if only one exists, check against that
    const _minDate = _min ? +_min : null;
    const _maxDate = _max ? +_max : null;
    const value = +(new Date(control.value));

    // if only min
    const future = _maxDate ? value < _maxDate : true;
    const past = value > _minDate;
    if (future && past) {
      return null;
    }

    return {
      dateRange: true
    };
  };
};

// validate file size to be what?
export const sizeValidatorFn = (params: {size: number, max: number}): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    // convert max from KB to bytes
    const _max = params.max * 1024;
    if (params.size > _max) {
      return {
        size: true
      };
    }

    return null;
  };
};

// export const dateRangeValidatorFn = (min: string, max?: string): ValidatorFn => {
//   return (control: AbstractControl): ValidationErrors | null => {
//     if (!control.value) return null;

//     // make two dates if one is null, the other takes over, if both null, return null.
//     const _min = makeDate(min);
//     const _max = makeDate(max);
//     if (!_min && !_max) return null;

//     // if both exist, range
//     // if only one exists, check against that
//     const _minDate = _min ? +_min : null;
//     const _maxDate = _max ? +_max : null;
//     const value = +(new Date(control.value));

//     // if only min
//     const future = _maxDate ? value < _maxDate : true;
//     const past = value > _minDate;
//     if (future && past) {
//       return null;
//     }

//     return {
//       dateRange: true
//     };
//   };
// };

export const InputValidators = new Map<string, any >([
  ['matchPassword', matchPasswordFn],
  ['future', futureValidator],
  ['past', pastValidator],
  ['pastFn', pastValidatorFn],
  ['dateRangeFn', dateRangeValidatorFn],
  ['sizeFn', sizeValidatorFn]
]);

