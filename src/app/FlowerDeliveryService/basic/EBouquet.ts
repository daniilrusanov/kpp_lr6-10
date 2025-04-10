import { Product} from "./Product";
import {Bouquet} from "./Bouquet";

export class EBouquet extends Bouquet {
    private _format: string;

    constructor(
        id: number,
        name: string,
        price: number,
        format: string,
        flowerCount: number,
        packageType: string ,
        colorTheme: string,
        hasNote: boolean
    ) {
        super(id, name, price, flowerCount, packageType, colorTheme, hasNote, "EBouquet");
        this._format = format;
    }

    override getDetails(): string[] {
        return [
            `Format: ${this._format}`,
            `Flower count: ${super.flowerCount}`,
            `Package type: ${super.packageType}`,
            `Color theme: ${super.colorTheme}`,
            `Message included?: ${super.hasNote ? 'Yes' : 'No'}`
        ];
    }

    get format(): string {
        return this._format;
    }

    set format(value: string) {
        this._format = value;
    }
}
