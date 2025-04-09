import { StringToDate } from '../../../../src/app/FlowerDeliveryService/validators/StringToDate';

describe('StringToDate', () => {
    it('should correctly convert date with dot separator (dd.mm.yyyy)', () => {
        const result = StringToDate('12.04.2024');
        expect(result.getFullYear()).to.equal(2024);
        expect(result.getMonth()).to.equal(3); // Квітень — це 3 місяць (індексація з 0)
        expect(result.getDate()).to.equal(12);
    });

    it('should correctly convert date with slash separator (dd/mm/yyyy)', () => {
        const result = StringToDate('15/08/2020');
        expect(result.getFullYear()).to.equal(2020);
        expect(result.getMonth()).to.equal(7); // Серпень — це 7 місяць
        expect(result.getDate()).to.equal(15);
    });

    it('should return the correct date for edge cases', () => {
        const result = StringToDate('31.12.2022');
        expect(result.getFullYear()).to.equal(2022);
        expect(result.getMonth()).to.equal(11); // Грудень — це 11 місяць
        expect(result.getDate()).to.equal(31);
    });

    it('should return invalid date for incorrect input', () => {
        const result = StringToDate('invalid-date');
        expect(result.getTime()).to.be.NaN; // Повертатиме NaN для невірної дати
    });
});
