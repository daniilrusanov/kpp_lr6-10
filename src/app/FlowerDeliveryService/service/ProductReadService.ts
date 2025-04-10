import {Injectable} from "@angular/core";
import {IProduct} from "../basic/IProduct";
import {ProductFactory} from "../ProductFactory";
import {ProductType} from "../ProductType";
import {ConfigService} from "./ConfigService";

const API_URL = 'https://api.jsonbin.io/v3/b/67f175418a456b796683122f';
const API_KEY_MASTER = '';
const API_KEY_ACCESS = '';

@Injectable({
    providedIn: 'root'
})
export class ProductReadService {
    searchProducts: IProduct[] = [];
    public products: IProduct[] = [];

    addProduct(product: IProduct) {
        this.products.push(product);
    }

    constructor(private configService: ConfigService) {
    }

    search(type: ProductType) {
        this.searchProducts = this.products.filter((product) => {
            return product.getType() == type;
        });
    }

    typeSub = this.configService.type$
        .subscribe(() => {
            let type = this.configService.type$.value;
            this.search(type);
        })

    public async load() {
        fetch(API_URL, {
            method: 'GET',
            headers: {
                // 'X-Master-Key': API_KEY_MASTER,
                // 'X-Access-Key': API_KEY_ACCESS,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((json) => {
                let data = json.record;
                console.log(data);
                let products = data.map((item: any) => ProductFactory.createProduct(item));
                this.products = [];
                products.forEach((product: any) => this.addProduct(product));
            });
    }

    save() {
        localStorage.setItem('products', JSON.stringify(this.products));
    }
}
