import { Product} from "./Product";

export class Bouquet extends Product {
    private _flowerCount: number;
    private _packageType: string;
    private _colorTheme: string;
    private _hasNote: boolean;

    constructor(
        id: number,
        name: string,
        price: number,
        flowerCount: number,
        packageType: string ,
        colorTheme: string,
        hasNote: boolean
    ) {
        super(id, name, price, "Bouquet");
        this._flowerCount = flowerCount;
        this._packageType = packageType;
        this._colorTheme = colorTheme;
        this._hasNote = hasNote;
    }

    override getDetails(): string[] {
        return [
            `Flower count: ${this._flowerCount}`,
            `Package type: ${this._packageType}`,
            `Color theme: ${this._colorTheme}`,
            `Message included?: ${this._hasNote ? 'Yes' : 'No'}`
        ];
    }

    get flowerCount(): number {
        return this._flowerCount;
    }

    get packageType(): string {
        return this._packageType;
    }

    get colorTheme(): string {
        return this._colorTheme;
    }

    get hasNote(): boolean {
        return this._hasNote;
    }

    set flowerCount(value: number) {
        this._flowerCount = value;
    }

    set packageType(value: string) {
        this._packageType = value;
    }

    set colorTheme(value: string) {
        this._colorTheme = value;
    }

    set hasNote(value: boolean) {
        this._hasNote = value;
    }
}
