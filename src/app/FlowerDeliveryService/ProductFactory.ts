import {Bouquet} from "./basic/Bouquet";
import {IndoorPlant} from "./basic/IndoorPlant";
import {GiftSet} from "./basic/GiftSet";
import {productType} from "./ProductType";
import {IProduct} from "./basic/IProduct";

export class ProductFactory {

    protected static newBouquet(data: any): Bouquet {
        return new Bouquet(
            data.id,
            data.name,
            data.price,
            data.flowerCount ?? 0,
            data.packageType ?? 'Paper',
            data.colorTheme ?? 'Basic',
            data.hasNote ?? false
        );
    }

    protected static newIndoorPlant(data: any): IndoorPlant {
      return new IndoorPlant(
          data.id,
          data.name,
          data.price,
          data.potType ?? 'Plastic',
          data.wateringFrequency ?? 'Weekly',
          data.size ?? 'Medium',
          data.isBlooming ?? false
      );
    }

    protected static newGiftSet(data: any): GiftSet {
      const bouquets = data.bouquets?.map((bouquetData: any) => ProductFactory.newBouquet(bouquetData)) ?? [];
      const indoorPlants = data.indoorPlants?.map((plantData: any) => ProductFactory.newIndoorPlant(plantData)) ?? [];

      return new GiftSet(
          data.id,
          data.name,
          data.price,
          bouquets,
          indoorPlants,
          data.packagingType ?? 'Box',
          data.occasion ?? 'Birthday',
          data.personalMessage ?? ''
      );
    }

    static createProduct(data: any): IProduct {
        switch (data.type) {
            case productType[0]:
                return ProductFactory.newBouquet(data);
            case productType[1]:
                return ProductFactory.newIndoorPlant(data);
            case productType[2]:
                console.log(data);
                return ProductFactory.newGiftSet(data);
            default:
                throw new Error("Invalid product type");
        }
    }
}
