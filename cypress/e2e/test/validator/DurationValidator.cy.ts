import { isValidDuration } from '../../../../src/app/FlowerDeliveryService/validators/DurationValidator';
describe('ValidatorDuration', () => {

    it("We check for 2 the result is false", () => {
        let s = isValidDuration(2);
        expect(s).to.equals(false);
    });

    it("We check for 13 the result is false", () => {
        let s = isValidDuration(13);
        expect(s).to.equals(false);
    });

    it("We check for 5 the result is true", () => {
        let s = isValidDuration(5);
        expect(s).to.equals(true);
    });

});
