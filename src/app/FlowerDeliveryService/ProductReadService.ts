import {Injectable} from "@angular/core";
import {IProduct} from "./IProduct";
import {ProductFactory} from "./ProductFactory";

const API_URL = 'https://api.jsonbin.io/v3/b/67f175418a456b796683122f';
const API_KEY_MASTER = '';
const API_KEY_ACCESS = '';

@Injectable({
  providedIn: 'root'
})
export class ProductReadService {
  public products: IProduct[] = [];

  addProduct(product: IProduct) {
    this.products.push(product);
  }

  constructor() {
  }

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
}
