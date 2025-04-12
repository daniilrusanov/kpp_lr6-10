import { Product } from "./Product";

export class IndoorPlant extends Product {
    private potType: string;
    private wateringFrequency: string;
    private size: string;
    private isBlooming: boolean;

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
        this.potType = potType;
        this.wateringFrequency = wateringFrequency;
        this.size = size;
        this.isBlooming = isBlooming;
    }

    override getDetails(): string[] {
        return [
            `Pot type: ${this.potType}`,
            `Watering: ${this.wateringFrequency}`,
            `Size: ${this.size}`,
            `Blooming: ${this.isBlooming ? 'Yes' : 'No'}`
        ];
    }
}
