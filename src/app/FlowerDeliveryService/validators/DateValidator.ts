import {AbstractControl, ValidatorFn} from '@angular/forms';
import {ValidatorDataService} from "./ValidatorDataService";

export function dateValidator(): ValidatorFn {
    return (
        control: AbstractControl
    ): { [key: string]: boolean } | null => {
        let validator = new ValidatorDataService();
        let valid = !control.value || validator.validate_date(control.value);
        return valid ? null : {date: true};
    };
}
