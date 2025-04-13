import { Product} from "./Product";

export class Bouquet extends Product {
    flowerCount: number;
    packageType: string;
    colorTheme: string;
    occasion: string;
    hasNote: boolean;

    constructor(
        id: number,
        name: string,
        price: number,
        flowerCount: number,
        packageType: string ,
        colorTheme: string,
        occasion: string,
        hasNote: boolean,
        type: string = "Bouquet"
    ) {
        super(id, name, price, type);
        this.flowerCount = flowerCount;
        this.packageType = packageType;
        this.colorTheme = colorTheme;
        this.occasion = occasion;
        this.hasNote = hasNote;
    }

    override getDetails(): string[] {
        return [
            `Flower count: ${this.flowerCount}`,
            `Package type: ${this.packageType}`,
            `Color theme: ${this.colorTheme}`,
            `Occasion: ${this.occasion}`,
            `Message included?: ${this.hasNote ? 'Yes' : 'No'}`
        ];
    }

    getOccasion(): string {
        return this.occasion;
    }
}
