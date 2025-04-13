import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "../basic/IProduct";
import { ProductType } from "../ProductType";
import { Bouquet } from "../basic/Bouquet";
import { EBouquet } from "../basic/EBouquet";

@Pipe({
    name: 'filterByOccasion',
    standalone: true,
})
export class FilterByOccasion implements PipeTransform {
    transform(products: IProduct[], type: ProductType, occasion: string): IProduct[] {
        if (!products || !type || !occasion) return [];

        return products.filter(product =>
            (product instanceof Bouquet || product instanceof EBouquet) &&
            product.getType() === type &&
            product.getOccasion() == occasion
        );
    }
}
