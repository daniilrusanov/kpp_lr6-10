import {Pipe, PipeTransform} from "@angular/core";
import {IProduct} from "../basic/IProduct";
import {ProductType} from "../ProductType";
import {IndoorPlant} from "../basic/IndoorPlant";
import {GiftSet} from "../basic/GiftSet";

@Pipe({
    name: 'filterByCategory',
    standalone: true,
})
export class FilterByCategory implements PipeTransform {
    transform(products: IProduct[], type: ProductType): IProduct[] {
        if (!products || !type) {
            return products;
        }
        return products.filter((product) =>
            (product instanceof IndoorPlant || product instanceof GiftSet) &&
            product.getType() === type
        );
    }
}
