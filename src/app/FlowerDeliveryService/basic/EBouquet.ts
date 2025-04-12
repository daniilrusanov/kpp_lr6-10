import {Bouquet} from "./Bouquet";

export class EBouquet extends Bouquet {
    private format: string;

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
        this.format = format;
    }

    override getDetails(): string[] {
        return [
            `Format: ${this.format}`,
            `Flower count: ${this.flowerCount}`,
            `Package type: ${this.packageType}`,
            `Color theme: ${this.colorTheme}`,
            `Message included?: ${this.hasNote ? 'Yes' : 'No'}`
        ];
    }
}
