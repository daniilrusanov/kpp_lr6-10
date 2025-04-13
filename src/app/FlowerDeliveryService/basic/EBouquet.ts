import {Bouquet} from "./Bouquet";

export class EBouquet extends Bouquet {
    format: string;

    constructor(
        id: number,
        name: string,
        price: number,
        format: string,
        flowerCount: number,
        packageType: string ,
        colorTheme: string,
        occasion: string,
        hasNote: boolean
    ) {
        super(id, name, price, flowerCount, packageType, colorTheme, occasion, hasNote, "EBouquet");
        this.format = format;
    }

    override getDetails(): string[] {
        return [
            `Format: ${this.format}`,
            `Flower count: ${this.flowerCount}`,
            `Package type: ${this.packageType}`,
            `Color theme: ${this.colorTheme}`,
            `Occasion: ${this.occasion}`,
            `Message included?: ${this.hasNote ? 'Yes' : 'No'}`
        ];
    }
}
