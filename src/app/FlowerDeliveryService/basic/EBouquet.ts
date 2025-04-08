import { Product} from "./Product";

export class EBouquet extends Product {
    private _format: string;
    private _flowerCount: number;
    private _packageType: string;
    private _colorTheme: string;
    private _hasNote: boolean;

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
        super(id, name, price, "EBouquet");
        this._format = format;
        this._flowerCount = flowerCount;
        this._packageType = packageType;
        this._colorTheme = colorTheme;
        this._hasNote = hasNote;
    }

    override getDetails(): string[] {
        return [
            `Format: ${this._format}`,
            `Flower count: ${this._flowerCount}`,
            `Package type: ${this._packageType}`,
            `Color theme: ${this._colorTheme}`,
            `Message included?: ${this._hasNote ? 'Yes' : 'No'}`
        ];
    }

    get format(): string {
        return this._format;
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

    set format(value: string) {
        this._format = value;
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
