import {ValidatorDataService} from "../../../../src/app/FlowerDeliveryService/validators/ValidatorDataService";

describe('ValidatorDataService validate_date()', () => {
    let validator: ValidatorDataService;

    beforeEach(() => {
        validator = new ValidatorDataService();
    });

    it('should return true for valid date dd.mm.yyyy', () => {
        expect(validator.validate_date('12.04.2024')).to.be.true;
    });

    it('should return true for valid date dd/mm/yyyy', () => {
        expect(validator.validate_date('15/08/2020')).to.be.true;
    });

    it('should return false for non-existing date like 31.02.2023', () => {
        expect(validator.validate_date('31.02.2023')).to.be.false;
    });

    it('should return false for wrong year < 1000', () => {
        expect(validator.validate_date('01.01.0999')).to.be.false;
    });

    it('should return false for invalid format', () => {
        expect(validator.validate_date('invalid-data')).to.be.false;
    });

    it('should return false for empty string', () => {
        expect(validator.validate_date('')).to.be.false;
    });

});
