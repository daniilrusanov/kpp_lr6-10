import {BehaviorSubject} from "rxjs";
import {IProduct} from "../basic/IProduct";
import {Database, onValue, push, ref, remove, set, update} from "@angular/fire/database";
import {ProductFactory} from "../ProductFactory";
import {Injectable, NgZone} from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProductBDReadService {

    private productSubject = new BehaviorSubject<IProduct[]>([]);
    product$ = this.productSubject.asObservable();
    private lastId: number = 0;

    constructor(
        private db: Database,
        private zone: NgZone
    ) {
    }

    fetchProducts(): void {
        const productsRef = ref(this.db, 'products');
        console.log('fetchProducts started');

        this.zone.run(() => {
            onValue(productsRef, (snapshot) => {
                const data = snapshot.val();
                const products = data
                    ? Object.entries(data).map(([key, value]: [string, any]) =>
                        ProductFactory.createProduct({...value, id: Number(key)})
                    )
                    : [];


                this.lastId = products.length > 0 ? Math.max(...products.map(p => p.getID())) : 0;
                console.log("Last ID:", this.lastId);
                this.productSubject.next(products);
                console.log('Fetched products:', products);
            });
        });
    }


    addProduct(product: IProduct): void {
        const id = this.lastId + 1;
        this.lastId = id;

        const productsRef = ref(this.db, `products/${id}`);
        set(productsRef, {
            ...product,
            id: id,
            type: product.getType(),
        });
    }

    editProduct(updateProduct: IProduct): void {
        const productsRef = ref(this.db, `products/${updateProduct.getID()}`);
        update(productsRef, {
            ...updateProduct
        });
    }

    deleteProduct(productId: number): void {
        const productRef = ref(this.db, `products/${productId}`);
        remove(productRef);
    }
}