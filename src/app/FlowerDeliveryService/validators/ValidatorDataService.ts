import {StringToDate} from "./StringToDate";

export class ValidatorDataService {
    validate_date(value: string) {
        let arrD: string[];
        arrD = value.split(/[.-/]/);
        let arrDate: number[] = [];
        arrD.forEach((item) => {
            arrDate.push(Number(item));
        });
        arrDate[1] -= 1;
        let d = StringToDate(value);
        return d.getFullYear() === (arrDate[2]) &&
            d.getMonth() === (arrDate[1]) &&
            d.getDate() === arrDate[0] &&
            arrDate[2] > 1000;
    }
    constructor() {}
}

