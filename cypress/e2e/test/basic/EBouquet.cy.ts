import {EBouquet} from "../../../../src/app/FlowerDeliveryService/basic/EBouquet";

describe('EBouquet Class', () => {
    let bouquet: EBouquet;

    beforeEach(() => {
        bouquet = new EBouquet(1, 'Romantic Roses', 100, 'Digital', 15, 'Paper', 'Red', true);
    });

    it('should create bouquet with correct properties', () => {
        expect(bouquet.getID()).to.equal(1);
        expect(bouquet.getName()).to.equal('Romantic Roses');
        expect(bouquet.getPrice()).to.equal(100);
        expect(bouquet.getType()).to.equal('EBouquet');
        expect(bouquet.format).to.equal('Digital');
        expect(bouquet.flowerCount).to.equal(15);
        expect(bouquet.packageType).to.equal('Paper');
        expect(bouquet.colorTheme).to.equal('Red');
        expect(bouquet.hasNote).to.equal(true);
    });

    it('should update bouquet properties', () => {
        bouquet.format = 'PDF';
        bouquet.flowerCount = 20;
        bouquet.packageType = 'Fabric';
        bouquet.colorTheme = 'White';
        bouquet.hasNote = false;

        expect(bouquet.format).to.equal('PDF');
        expect(bouquet.flowerCount).to.equal(20);
        expect(bouquet.packageType).to.equal('Fabric');
        expect(bouquet.colorTheme).to.equal('White');
        expect(bouquet.hasNote).to.equal(false);
    });

    it('should return correct details', () => {
        expect(bouquet.getDetails()).to.deep.equal([
            'Format: Digital',
            'Flower count: 15',
            'Package type: Paper',
            'Color theme: Red',
            'Message included?: Yes'
        ]);

        bouquet.hasNote = false;

        expect(bouquet.getDetails()).to.deep.equal([
            'Format: Digital',
            'Flower count: 15',
            'Package type: Paper',
            'Color theme: Red',
            'Message included?: No'
        ]);
    });
});
