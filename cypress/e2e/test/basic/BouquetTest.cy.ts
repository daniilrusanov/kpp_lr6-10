// npx cypress run --headless --code-coverage
import {Bouquet} from "../../../../src/app/FlowerDeliveryService/basic/Bouquet";

describe('Bouquet Class', () => {
    let bouquet: Bouquet;

    beforeEach(() => {
        bouquet = new Bouquet(1, 'Romantic Roses', 100, 15, 'Paper', 'Red', true);
    });

    it('should create bouquet with correct properties', () => {
        expect(bouquet.getID()).to.equal(1);
        expect(bouquet.getName()).to.equal('Romantic Roses');
        expect(bouquet.getPrice()).to.equal(100);
        expect(bouquet.getType()).to.equal('Bouquet');
        expect(bouquet.flowerCount).to.equal(15);
        expect(bouquet.packageType).to.equal('Paper');
        expect(bouquet.colorTheme).to.equal('Red');
        expect(bouquet.hasNote).to.be.true;
    });

    it('should return correct details array', () => {
        expect(bouquet.getDetails()).to.deep.equal([
            'Flower count: 15',
            'Package type: Paper',
            'Color theme: Red',
            'Note included: Yes'
        ]);
    });

    it('should update properties correctly using setters', () => {
        bouquet.flowerCount = 20;
        bouquet.packageType = 'Plastic';
        bouquet.colorTheme = 'Pink';
        bouquet.hasNote = false;

        expect(bouquet.flowerCount).to.equal(20);
        expect(bouquet.packageType).to.equal('Plastic');
        expect(bouquet.colorTheme).to.equal('Pink');
        expect(bouquet.hasNote).to.be.false;
    });

    it('should return updated details after using setters', () => {
        bouquet.flowerCount = 7;
        bouquet.packageType = 'Fabric';
        bouquet.colorTheme = 'White';
        bouquet.hasNote = false;

        expect(bouquet.getDetails()).to.deep.equal([
            'Flower count: 7',
            'Package type: Fabric',
            'Color theme: White',
            'Note included: No'
        ]);
    });
});
