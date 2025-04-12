import { Product} from "./Product";

export class Bouquet extends Product {
    protected flowerCount: number;
    protected packageType: string;
    protected colorTheme: string;
    protected hasNote: boolean;

    constructor(
        id: number,
        name: string,
        price: number,
        flowerCount: number,
        packageType: string ,
        colorTheme: string,
        hasNote: boolean,
        type: string = "Bouquet"
    ) {
        super(id, name, price, type);
        this.flowerCount = flowerCount;
        this.packageType = packageType;
        this.colorTheme = colorTheme;
        this.hasNote = hasNote;
    }

    override getDetails(): string[] {
        return [
            `Flower count: ${this.flowerCount}`,
            `Package type: ${this.packageType}`,
            `Color theme: ${this.colorTheme}`,
            `Message included?: ${this.hasNote ? 'Yes' : 'No'}`
        ];
    }
}
