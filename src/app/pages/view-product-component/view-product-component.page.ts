import {Component, NgZone, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
    IonButton,
    IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonItem,
    IonLabel
} from '@ionic/angular/standalone';
import {MyHeaderComponent} from "../../components/my-header/my-header.component";
import {AddProductComponent} from "../../components/add-product/add-product.component";
import {EditProductComponent} from "../../components/edit-product/edit-product.component";
import {DeleteProductComponent} from "../../components/delete-product/delete-product.component";
import {RouterLink} from "@angular/router";
import {ProductBDReadService} from "../../FlowerDeliveryService/service/ProductBDReadService";
import {IProduct} from "../../FlowerDeliveryService/basic/IProduct";

@Component({
    selector: 'app-view-product-component',
    templateUrl: './view-product-component.page.html',
    styleUrls: ['./view-product-component.page.scss'],
    standalone: true,
    imports: [IonContent, CommonModule, FormsModule, MyHeaderComponent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonButton, AddProductComponent, EditProductComponent, DeleteProductComponent, RouterLink]
})
export class ViewProductComponentPage implements OnInit {

    public products: IProduct[] = [];

    showAddForm: boolean = false;

    showEditForm: boolean = false;
    editFormNumber = 0;

    showDeleteForm: boolean = false;
    deleteFormNumber = 0;


    constructor(
        private productBDReadService: ProductBDReadService,
        private zone: NgZone
    ) {}

    ngOnInit() {
        this.zone.run(() => {
            console.log("Calling fetchProducts...");
            this.productBDReadService.fetchProducts();
            console.log("fetchProducts called");

            this.productBDReadService.product$.subscribe(product => {
                this.products = product;
                console.log("Products updated:", this.products);
            });
        });
    }


    addFormShow() {
       this.showAddForm = !this.showAddForm;
    }

    addProduct($event: any) {
        this.productBDReadService.addProduct($event);
        this.showAddForm = false;
    }

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
