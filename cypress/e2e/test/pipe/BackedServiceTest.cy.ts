import { BackedService } from '../../../../src/app/FlowerDeliveryService/pipe/BackedService';

describe('BackedService', () => {
    let service: BackedService;
    let mockProduct: any;
    let mockProduct2: any;

    beforeEach(() => {
        service = new BackedService();

        mockProduct = {
            getPrice: () => 100
        };

        mockProduct2 = {
            getPrice: () => 200
        };
    });

    it('adds new product to backedProducts and updates backedSum', () => {
        service.addBacked(mockProduct);

        expect(service.backedProducts).to.have.length(1);
        expect(service.backedCount[0]).to.eq(1);
        expect(service.backedSum).to.eq(100);
    });

    it('increments count if same product is added again', () => {
        service.addBacked(mockProduct);
        service.addBacked(mockProduct);

        expect(service.backedProducts).to.have.length(1);
        expect(service.backedCount[0]).to.eq(2);
        expect(service.backedSum).to.eq(200);
    });

    it('deletes one backed product when count > 1', () => {
        service.addBacked(mockProduct);
        service.addBacked(mockProduct);

        service.deleteOneBacked(mockProduct);

        expect(service.backedProducts).to.have.length(1);
        expect(service.backedCount[0]).to.eq(1);
        expect(service.backedSum).to.eq(100);
    });

    it('deletes product entirely when count = 1', () => {
        service.addBacked(mockProduct);

        service.deleteOneBacked(mockProduct);

        expect(service.backedProducts).to.have.length(0);
        expect(service.backedCount).to.have.length(0);
        expect(service.backedSum).to.eq(0);
    });

    it('deletes product via deleteBacked', () => {
        service.addBacked(mockProduct);
        service.addBacked(mockProduct);

        service.deleteBacked(mockProduct);

        expect(service.backedProducts).to.have.length(0);
        expect(service.backedCount).to.have.length(0);
        expect(service.backedSum).to.eq(0);
    });

    it('can handle multiple products', () => {
        service.addBacked(mockProduct);
        service.addBacked(mockProduct2);

        expect(service.backedProducts).to.have.length(2);
        expect(service.backedSum).to.eq(300);
    });

    it('deletes all products with deleteAllBacked', () => {
        service.addBacked(mockProduct);
        service.addBacked(mockProduct2);

        service.deleteAllBacked();

        expect(service.backedProducts).to.have.length(0);
        expect(service.backedCount).to.have.length(0);
        expect(service.backedSum).to.eq(0);
    });
});
