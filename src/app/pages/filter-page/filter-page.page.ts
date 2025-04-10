import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard, IonCardContent,
  IonCardHeader, IonCardTitle,
  IonContent,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import {MyHeaderComponent} from "../../components/my-header/my-header.component";
import {ConfigService} from "../../FlowerDeliveryService/service/ConfigService";
import {Subscription} from "rxjs";
import {DEFAULT_TYPE, productType, ProductType} from "../../FlowerDeliveryService/ProductType";
import {ProductReadService} from "../../FlowerDeliveryService/service/ProductReadService";
import {DeleteProductComponent} from "../../components/delete-product/delete-product.component";
import {EditProductComponent} from "../../components/edit-product/edit-product.component";

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.page.html',
  styleUrls: ['./filter-page.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, MyHeaderComponent, IonButton, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, DeleteProductComponent, EditProductComponent]
})
export class FilterPagePage implements OnInit {
  private configService = new ConfigService();
  private subscriptions: Subscription[] = [];
  productService = new ProductReadService(this.configService);
  type: ProductType = DEFAULT_TYPE;
  count = 0;

  constructor(public productReadService: ProductReadService) {
    this.productService.load();
  }

  ngOnInit() {
    const typeSub = this.configService.type$
        .subscribe(type => {
          this.type = this.configService.type$.value;
        });
    this.subscriptions.push(typeSub);
  }

  nextType() {
    if (this.count < productType.length - 1) {
      this.count++;
    } else {
      this.count = 0;
    }
    this.configService.setType(productType[this.count]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  showAddForm: boolean = false;

  showEditForm: boolean = false;
  editFormNumber = 0;

  showDeleteForm: boolean = false;
  deleteFormNumber = 0;

  addFormShow() {
    this.showAddForm = true;
  }

  addProduct($event: any) {
    this.productReadService.addProduct($event);
    this.showAddForm = false;
  }

  editFormShow(j: number) {
    this.showEditForm = true;
    this.editFormNumber = j;
  }

  editProduct($event: any, j: number) {
    this.productReadService.products[j] = $event;
    this.showEditForm = false;
  }

  deleteFormShow(j: number) {
    this.showDeleteForm = true;
    this.deleteFormNumber = j;
  }

  hideDeleteForm() {
    this.showDeleteForm = false;
  }

  deleteProduct(j: number) {
    this.productReadService.products.splice(j, 1);
    if (typeof this.productReadService.save === 'function') {
      this.productReadService.save();
    }
    this.showDeleteForm = false;
  }
}
