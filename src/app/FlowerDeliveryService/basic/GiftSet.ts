import { Product } from "./Product";
import { Bouquet } from "./Bouquet";
import { IndoorPlant } from "./IndoorPlant";

export class GiftSet extends Product {
    private bouquets: Bouquet[];
    private indoorPlants: IndoorPlant[];
    private duration: number;
    private date: number;
    private packagingType: string;
    private occasion: string;
    private personalMessage: string;

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
        super(id, name, price, 'GiftSet');
        this.bouquets = bouquets;
        this.indoorPlants = indoorPlants;
        this.duration = duration;
        this.date = date;
        this.packagingType = packagingType;
        this.occasion = occasion;
        this.personalMessage = personalMessage;
    }

    override getDetails(): string[] {
        const bouquetDetails = this.bouquets.flatMap(b => b.getDetails());
        const housePlantDetails = this.indoorPlants.flatMap(hp => hp.getDetails());

        return [
            `Bouquets: ${this.bouquets.length}`,
            `Indoor Plants: ${this.indoorPlants.length}`,
            `Duration: ${this.duration} month`,
            `Date: ${this.date}`,
            `Packaging: ${this.packagingType}`,
            `Occasion: ${this.occasion}`,
            `Message: ${this.personalMessage || 'None'}`,
            'Bouquet details:',
            ...bouquetDetails,
            'HousePlant details:',
            ...housePlantDetails
        ];
    }

    getOccasion(): string {
        return this.occasion;
    }
}
