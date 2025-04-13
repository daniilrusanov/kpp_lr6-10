import {IProduct} from "../basic/IProduct";

export class BackedService {
    backedProducts: IProduct[] = [];
    backedCount: number[] = [];
    backedSum = 0;

    addBacked(product: IProduct) {
        let i = this.backedProducts.findIndex((i) => i === product);
        if (i === -1) {
            this.backedProducts.push(product);
            this.backedCount.push(1);
        } else {
            this.backedCount[i]++;
        }
        this.backedSum += product.getPrice();
    }

    deleteBacked(product: IProduct) {
        let i = this.backedProducts.findIndex((i) => i === product);
        let sum = product.getPrice() * this.backedCount[i];
        this.backedSum -= sum;
        this.backedProducts.splice(i, 1);
        this.backedCount.splice(i, 1);
    }

    deleteOneBacked(product: IProduct) {
        let i = this.backedProducts.findIndex((i) => i === product);
        if (this.backedCount[i] > 1) {
            this.backedCount[i]--;
            this.backedSum -= product.getPrice();
        } else {
            this.deleteBacked(product);
        }
    }

    deleteAllBacked() {
        this.backedCount = [];
        this.backedProducts = [];
        this.backedSum = 0;
    }
}
