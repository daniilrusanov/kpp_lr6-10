import { Product } from "./Product";
import { Bouquet } from "./Bouquet";
import { IndoorPlant } from "./IndoorPlant";

export class GiftSet extends Product {
    private _bouquets: Bouquet[];
    private _indoorPlants: IndoorPlant[];
    private _duration: number;
    private _date: number;
    private _packagingType: string;
    private _occasion: string;
    private _personalMessage: string;

    constructor(
        id: number,
        name: string,
        price: number,
        bouquets: Bouquet[],
        indoorPlants: IndoorPlant[],
        duration: number,
        date: number,
        packagingType: string,
        occasion: string,
        personalMessage: string
    ) {
        super(id, name, price, 'Gift Set');
        this._bouquets = bouquets;
        this._indoorPlants = indoorPlants;
        this._duration = duration;
        this._date = date;
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
            `Duration: ${this._duration} month`,
            `Date: ${this._date}`,
            `Packaging: ${this._packagingType}`,
            `Occasion: ${this._occasion}`,
            `Message: ${this._personalMessage ?? 'None'}`,
            'Bouquet details:',
            ...bouquetDetails,
            'HousePlant details:',
            ...housePlantDetails
        ];
    }

    get bouquets(): Bouquet[] {
        return this._bouquets;
    }

    set bouquets(value: Bouquet[]) {
        this._bouquets = value;
    }

    get indoorPlants(): IndoorPlant[] {
        return this._indoorPlants;
    }

    set indoorPlants(value: IndoorPlant[]) {
        this._indoorPlants = value;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

    get date(): number {
        return this._date;
    }

    set date(value: number) {
        this._date = value;
    }

    get packagingType(): string {
        return this._packagingType;
    }

    set packagingType(value: string) {
        this._packagingType = value;
    }

    get occasion(): string {
        return this._occasion;
    }

    set occasion(value: string) {
        this._occasion = value;
    }

    get personalMessage(): string {
        return this._personalMessage;
    }

    set personalMessage(value: string) {
        this._personalMessage = value;
    }
}
