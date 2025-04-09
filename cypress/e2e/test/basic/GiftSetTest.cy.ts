import { GiftSet } from "../../../../src/app/FlowerDeliveryService/basic/GiftSet";
import { Bouquet } from "../../../../src/app/FlowerDeliveryService/basic/Bouquet";
import { IndoorPlant } from "../../../../src/app/FlowerDeliveryService/basic/IndoorPlant";

describe('GiftSet Class', () => {
    let bouquet: Bouquet;
    let indoorPlant: IndoorPlant;
    let giftSet: GiftSet;

    beforeEach(() => {
        bouquet = new Bouquet(1, 'Roses', 500, 15, 'Paper', 'Red', true);
        indoorPlant = new IndoorPlant(2, 'Aloe Vera', 200, 'Ceramic', 'Monthly', 'Small', false);

        giftSet = new GiftSet(
            3,
            'Romantic Gift',
            1000,
            [bouquet],
            [indoorPlant],
            6,
            20231001,
            'Box',
            'Anniversary',
            'Love you!'
        );
    });

    it('should create gift set with correct properties', () => {
        expect(giftSet.getID()).to.equal(3);
        expect(giftSet.getName()).to.equal('Romantic Gift');
        expect(giftSet.getPrice()).to.equal(1000);
        expect(giftSet.getType()).to.equal('Gift Set');
    });

    it('should return correct details array', () => {
        expect(giftSet.getDetails()).to.deep.equal([
            "Bouquets: 1",
            "Indoor Plants: 1",
            "Duration: 6 month",
            "Date: 20231001",
            "Packaging: Box",
            "Occasion: Anniversary",
            "Message: Love you!",
            "Bouquet details:",
            "Flower count: 15",
            "Package type: Paper",
            "Color theme: Red",
            "Message included?: Yes",
            "HousePlant details:",
            "Pot type: Ceramic",
            "Watering: Monthly",
            "Size: Small",
            "Blooming: No"
        ]);
    });

    it('should handle empty bouquets and indoor plants', () => {
        const emptyGiftSet = new GiftSet(
            4,
            'Simple Gift',
            300,
            [],
            [],
            0,
            0,
            'Bag',
            'Birthday',
            ''
        );

        expect(emptyGiftSet.getDetails()).to.deep.equal([
            "Bouquets: 0",
            "Indoor Plants: 0",
            "Duration: 0 month",
            "Date: 0",
            "Packaging: Bag",
            "Occasion: Birthday",
            "Message: None",
            "Bouquet details:",
            "HousePlant details:"
        ]);
    });
});
