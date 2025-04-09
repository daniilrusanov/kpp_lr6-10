import { Product } from "./Product";

export class IndoorPlant extends Product {
    private _potType: string;
    private _wateringFrequency: string;
    private _size: string;
    private _isBlooming: boolean;

    constructor(
        id: number,
        name: string,
        price: number,
        potType: string,
        wateringFrequency: string,
        size: string,
        isBlooming: boolean
    ) {
        super(id, name, price, 'IndoorPlant');
        this._potType = potType;
        this._wateringFrequency = wateringFrequency;
        this._size = size;
        this._isBlooming = isBlooming;
    }

    override getDetails(): string[] {
        return [
            `Pot type: ${this.potType}`,
            `Watering: ${this.wateringFrequency}`,
            `Size: ${this.size}`,
            `Blooming: ${this.isBlooming ? 'Yes' : 'No'}`
        ];
    }

    get potType(): string {
        return this._potType;
    }

    get wateringFrequency(): string {
        return this._wateringFrequency;
    }

    get size(): string {
        return this._size;
    }

    get isBlooming(): boolean {
        return this._isBlooming;
    }

    set potType(value: string) {
        this._potType = value;
    }

    set wateringFrequency(value: string) {
        this._wateringFrequency = value;
    }

    set size(value: string) {
        this._size = value;
    }

    set isBlooming(value: boolean) {
        this._isBlooming = value;
    }
}
