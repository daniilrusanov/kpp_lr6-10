import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import {MyHeaderComponent} from "../my-header/my-header.component";
import {ProductReadService} from "../FlowerDeliveryService/ProductReadService";
import {AddProductComponent} from "../components/add-product/add-product.component";
import {EditProductComponent} from "../components/edit-product/edit-product.component";

@Component({
  selector: 'app-view-product-component',
  templateUrl: './view-product-component.page.html',
  styleUrls: ['./view-product-component.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, MyHeaderComponent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonButton, AddProductComponent, EditProductComponent]
})
export class ViewProductComponentPage implements OnInit {
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  editFormNumber = 0;

  constructor(public productReadService: ProductReadService) { }

  ngOnInit() {
    this.productReadService.load();
  }

  addFormShow() {
    this.showAddForm = true;
  }

  addProduct($event: any) {
    this.productReadService.addProduct($event);
    this.showAddForm = false;
  }

  editFormShow(i: number) {
    this.showEditForm = true;
    this.editFormNumber = i;
  }

  editProduct($event: any, i: number) {
    this.productReadService.products[i] = $event;
    this.showEditForm = false;
  }
}
