import {ProductFactory} from "../../../src/app/FlowerDeliveryService/ProductFactory";
import {GiftSet} from "../../../src/app/FlowerDeliveryService/basic/GiftSet";
import {IndoorPlant} from "../../../src/app/FlowerDeliveryService/basic/IndoorPlant";
import {Bouquet} from "../../../src/app/FlowerDeliveryService/basic/Bouquet";

describe('ProductFactory Tests', () => {
    it('should create a Bouquet product', () => {
        const data = {
            id: 1,
            name: 'Rose Bouquet',
            price: 50,
            type: 'Bouquet',
            flowerCount: 10,
            packageType: 'Paper',
            colorTheme: 'Red',
            hasNote: true
        };

        const bouquet = ProductFactory.createProduct(data);

        expect(bouquet).to.be.instanceOf(Bouquet);
        expect(bouquet.getID()).to.equal(1);
        expect(bouquet.getName()).to.equal('Rose Bouquet');
        expect(bouquet.getPrice()).to.equal(50);
        expect(bouquet.getDetails()).to.include.members(['Flower count: 10']);
    });

    it('should create an IndoorPlant product', () => {
        const data = {
            id: 2,
            name: 'Cactus Plant',
            price: 25,
            type: 'IndoorPlant',
            potType: 'Ceramic',
            wateringFrequency: 'Monthly',
            size: 'Small',
            isBlooming: false
        };

        const indoorPlant = ProductFactory.createProduct(data);

        expect(indoorPlant).to.be.instanceOf(IndoorPlant);
        expect(indoorPlant.getID()).to.equal(2);
        expect(indoorPlant.getName()).to.equal('Cactus Plant');
        expect(indoorPlant.getPrice()).to.equal(25);
        expect(indoorPlant.getDetails()).to.include.members(['Pot type: Ceramic']);
    });

    it('should create a GiftSet product', () => {
        const data = {
            id: 3,
            name: 'Special Gift Set',
            price: 100,
            type: 'GiftSet',
            bouquets: [],
            indoorPlants: [],
            packagingType: 'Box',
            occasion: 'Birthday',
            personalMessage: 'Happy Birthday!'
        };

        const giftSet = ProductFactory.createProduct(data);

        expect(giftSet).to.be.instanceOf(GiftSet);
        expect(giftSet.getID()).to.equal(3);
        expect(giftSet.getName()).to.equal('Special Gift Set');
        expect(giftSet.getPrice()).to.equal(100);
        expect(giftSet.getDetails()).to.include('Packaging: Box');
        expect(giftSet.getDetails()).to.include.members(['Occasion: Birthday']);
    });

    it('should throw an error if product type is invalid', () => {
        const data = {
            id: 4,
            name: 'Invalid Product',
            price: 20,
            type: 'InvalidType'
        };

        expect(() => ProductFactory.createProduct(data)).to.throw('Invalid product type');
    });
});
