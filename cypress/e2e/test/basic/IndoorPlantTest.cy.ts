// npx cypress run --headless --code-coverage

import {IndoorPlant} from "../../../../src/app/FlowerDeliveryService/basic/IndoorPlant";

describe('IndoorPlant Class', () => {
    let indoorPlant: IndoorPlant;

    beforeEach(() => {
        indoorPlant = new IndoorPlant(1, 'Aloe Vera', 200, 'Ceramic', 'Monthly', 'Small', false);
    });

    it('should create indoor plant with correct properties', () => {
        expect(indoorPlant.getID()).to.equal(1);
        expect(indoorPlant.getName()).to.equal('Aloe Vera');
        expect(indoorPlant.getPrice()).to.equal(200);
        expect(indoorPlant.getType()).to.equal('IndoorPlant');
        expect(indoorPlant.potType).to.equal('Ceramic');
        expect(indoorPlant.wateringFrequency).to.equal('Monthly');
        expect(indoorPlant.size).to.equal('Small');
        expect(indoorPlant.isBlooming).to.be.false;
    });

    it('should return correct details array', () => {
        expect(indoorPlant.getDetails()).to.deep.equal([
            'Pot type: Ceramic',
            'Watering: Monthly',
            'Size: Small',
            'Blooming: No'
        ]);
    });

    it('should update properties correctly using setters', () => {
        indoorPlant.potType = 'Plastic';
        indoorPlant.wateringFrequency = 'Weekly';
        indoorPlant.size = 'Large';
        indoorPlant.isBlooming = true;

        expect(indoorPlant.potType).to.equal('Plastic');
        expect(indoorPlant.wateringFrequency).to.equal('Weekly');
        expect(indoorPlant.size).to.equal('Large');
        expect(indoorPlant.isBlooming).to.be.true;
    });

    it('should return updated details after using setters', () => {
        indoorPlant.potType = 'Glass';
        indoorPlant.wateringFrequency = 'Daily';
        indoorPlant.size = 'Medium';
        indoorPlant.isBlooming = true;

        expect(indoorPlant.getDetails()).to.deep.equal([
            'Pot type: Glass',
            'Watering: Daily',
            'Size: Medium',
            'Blooming: Yes'
        ]);
    });
});
