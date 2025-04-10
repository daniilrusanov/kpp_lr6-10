export type ProductType = 'Bouquet'| 'IndoorPlant' | 'GiftSet' | 'EBouquet';
export type EProductType = 'png' | 'jpeg' | 'gif';

export const DEFAULT_TYPE = 'Bouquet';

export const productType: ReadonlyArray<ProductType> = [
    'Bouquet',
    'IndoorPlant',
    'GiftSet',
    'EBouquet'
]

export const eProductType: ReadonlyArray<EProductType> = [
    'png',
    'jpeg',
    'gif'
]
