import { AbstractControl, ValidatorFn } from '@angular/forms';
import { DATE_REGEX } from '../utilities/dateUtily.factory';


export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const dateStr = control.value;
    // Length of months (will update for leap years)
    const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    // Object to return if date is invalid
    const invalidObj = { 'date': true };

    // First check for m/d/yyyy or mm/dd/yyyy format
    // If the pattern is wrong, don't validate dates yet
    if (!DATE_REGEX.test(dateStr)) {
      return null;
    }

    // Parse the date input to integers
    const parts = dateStr.split('/');
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Make sure date is in range
    if (year < 2000 || year > 3000 || month === 0 || month > 12) {
      return invalidObj;
    }
    // Adjust for leap years
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthLength[1] = 29;
    }
    // Check the range of the day
    if (!(day > 0 && day <= monthLength[month - 1])) {
      return invalidObj;
    };
    
    return null;
  };
}

