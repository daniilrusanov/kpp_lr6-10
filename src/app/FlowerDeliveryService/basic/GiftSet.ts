import { Product } from "./Product";
import { Bouquet } from "./Bouquet";
import { IndoorPlant } from "./IndoorPlant";

export class GiftSet extends Product {
    private _bouquets: Bouquet[];
    private _indoorPlants: IndoorPlant[];
    private _packagingType: string;
    private _occasion: string;
    private _personalMessage: string;

    constructor(
        id: number,
        name: string,
        price: number,
        bouquets: Bouquet[],
        indoorPlants: IndoorPlant[],
        packagingType: string,
        occasion: string,
        personalMessage: string
    ) {
        super(id, name, price, 'Gift Set');
        this._bouquets = bouquets;
        this._indoorPlants = indoorPlants;
        this._packagingType = packagingType;
        this._occasion = occasion;
        this._personalMessage = personalMessage;
    }

    override getDetails(): string[] {
        const bouquetDetails = this._bouquets.flatMap(b => b.getDetails());
        const housePlantDetails = this._indoorPlants.flatMap(hp => hp.getDetails());

        return [
            `Bouquets: ${this._indoorPlants.length}`,
            `Indoor Plants: ${this._indoorPlants.length}`,
            `Packaging: ${this._packagingType}`,
            `Occasion: ${this._occasion}`,
            `Message: ${this._personalMessage ?? 'None'}`,
            'Bouquet details:',
            ...bouquetDetails,
            'HousePlant details:',
            ...housePlantDetails
        ];
    }
}
