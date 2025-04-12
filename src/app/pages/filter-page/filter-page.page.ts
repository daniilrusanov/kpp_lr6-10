import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
    IonButton,
    IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonContent,
    IonItem,
    IonLabel
} from '@ionic/angular/standalone';
import {MyHeaderComponent} from "../../components/my-header/my-header.component";
import {ConfigService} from "../../FlowerDeliveryService/service/ConfigService";
import {Subscription} from "rxjs";
import {DEFAULT_TYPE, productType} from "../../FlowerDeliveryService/ProductType";
import {DeleteProductComponent} from "../../components/delete-product/delete-product.component";
import {EditProductComponent} from "../../components/edit-product/edit-product.component";
import {ProductBDReadService} from "../../FlowerDeliveryService/service/ProductBDReadService";
import {IProduct} from "../../FlowerDeliveryService/basic/IProduct";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-filter-page',
    templateUrl: './filter-page.page.html',
    styleUrls: ['./filter-page.page.scss'],
    standalone: true,
  imports: [IonContent, CommonModule, FormsModule, MyHeaderComponent, IonButton, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, DeleteProductComponent, EditProductComponent, IonCardSubtitle, RouterLink]
})
export class FilterPagePage implements OnInit {
    private configService = new ConfigService();
    private subscriptions: Subscription[] = [];
    public products: IProduct[] = [];
    public filteredProducts: IProduct[] = [];

    type1: any = DEFAULT_TYPE;
    type2: any = 'Undefined';
    count1 = 0;
    count2 = 0;

    constructor(private productBDReadService: ProductBDReadService) {
    }

    ngOnInit() {
        this.productBDReadService.fetchProducts();
        this.productBDReadService.product$.subscribe(products => {
            this.products = products;
            this.filterProducts();
        });
    }

    nextType(category: number) {
        if (category === 1) {
            this.count1 = (this.count1 < productType.length) ? this.count1 + 1 : 0;
            this.type1 = productType[this.count1] || 'Undefined';
        } else if (category === 2) {
            this.count2 = (this.count2 < productType.length) ? this.count2 + 1 : 0;
            this.type2 = productType[this.count2] || 'Undefined';
        }
        this.filterProducts();
    }

    filterProducts() {
        this.filteredProducts = this.products.filter(product => {
            const matchesType1 = product.getType() === this.type1;
            const matchesType2 = product.getType() === this.type2;
            return matchesType1 || matchesType2;
        });
    }

    showEditForm: boolean = false;
    editFormNumber = 0;

    showDeleteForm: boolean = false;
    deleteFormNumber = 0;

    editFormShow(i: number) {
        this.showEditForm = !this.showEditForm;
        this.editFormNumber = i;
    }

    editProduct($event: any) {
        this.productBDReadService.editProduct($event);
        this.showEditForm = false;
    }

    deleteFormShow(i: number) {
        this.showDeleteForm = !this.showDeleteForm;
        this.deleteFormNumber = i;
    }

    hideDeleteForm() {
        this.showDeleteForm = false;
    }

    deleteProduct(i: number) {
        this.productBDReadService.deleteProduct(i);
        this.showDeleteForm = false;
    }
}
