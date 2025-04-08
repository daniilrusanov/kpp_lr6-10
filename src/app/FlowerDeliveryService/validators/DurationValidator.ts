import {AbstractControl, ValidatorFn} from '@angular/forms';

export function isValidDuration(value: number): boolean {
    return value <= 12 && value >= 3;
}

export function durationValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        // let validator = new ValidatorDurationService();
        let valid = !control.value || isValidDuration(control.value);
        return valid ? null : {date: true};
    };
}
