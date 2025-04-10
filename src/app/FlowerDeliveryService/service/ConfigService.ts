import {Injectable} from "@angular/core";
import {DEFAULT_TYPE, ProductType} from "../ProductType";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ConfigService {
    currentType: string = DEFAULT_TYPE;
    type$: BehaviorSubject<ProductType> = new BehaviorSubject<ProductType>(DEFAULT_TYPE);

    setType(type: ProductType) {
        console.log('Є зміни в типі продукту:', type);
        this.type$.next(type);
    }

    constructor() {}
}
