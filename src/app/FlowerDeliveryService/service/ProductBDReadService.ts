import {BehaviorSubject} from "rxjs";
import {IProduct} from "../basic/IProduct";
import {Database, onValue, push, ref, remove, set, update} from "@angular/fire/database";
import {ProductFactory} from "../ProductFactory";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProductBDReadService {

    private productSubject = new BehaviorSubject<IProduct[]>([]);
    product$ = this.productSubject.asObservable();

    constructor(
        private db: Database,
    ) {
    }

    fetchProducts(): void {
        const productsRef = ref(this.db, 'products');
        console.log('fetchProducts started');

        onValue(productsRef, (snapshot) => {
            const data = snapshot.val();
            const products = data
                ? Object.entries(data).map((item: any) =>
                    ProductFactory.createProduct(item)
                )
                : [];
            this.productSubject.next(products);
            console.log('Fetched products:', products);
        });
    }


    addProduct(product: IProduct): void {
        const productsRef = ref(this.db, `products`);
        const newProductRef = push(productsRef);
        set(newProductRef, {
            ...product,
            _id: newProductRef.key,
            _type: product.getType(),
        });
    }

    editProduct(updateProduct: IProduct): void {
        const productId = updateProduct.getID();

        if (!productId) {
            console.error('Product ID is undefined!', updateProduct);
            return;
        }

        const productsRef = ref(this.db, `products/${productId}`);
        update(productsRef, {
            ...updateProduct,
            id: productId,
            type: updateProduct.getType(),
        });
    }

    deleteProduct(productId: number): void {
        const productRef = ref(this.db, `products/${productId}`);
        remove(productRef);
    }
}