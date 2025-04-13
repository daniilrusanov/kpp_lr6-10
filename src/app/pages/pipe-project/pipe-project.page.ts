import {Component, NgZone, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
    IonButton,
    IonCard,
    IonCardContent, IonCardHeader, IonCardTitle, IonCol,
    IonContent, IonFab, IonFabButton, IonGrid,
    IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/angular/standalone';
import {MyHeaderComponent} from "../../components/my-header/my-header.component";
import {RouterLink} from "@angular/router";
import {IProduct} from "../../FlowerDeliveryService/basic/IProduct";
import {ProductType} from "../../FlowerDeliveryService/ProductType";
import {ProductBDReadService} from "../../FlowerDeliveryService/service/ProductBDReadService";
import {BackedService} from "../../FlowerDeliveryService/pipe/BackedService";
import {addIcons} from "ionicons";
import {add, trashBin, trashBinOutline, wallet, walletOutline} from "ionicons/icons";
import {FilterByOccasion} from "../../FlowerDeliveryService/pipe/FilterByOccasion";
import {FilterByCategory} from "../../FlowerDeliveryService/pipe/FilterByCategory";


@Component({
    selector: 'app-pipe-project',
    templateUrl: './pipe-project.page.html',
    styleUrls: ['./pipe-project.page.scss'],
    standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent, IonButton, IonCardContent, RouterLink, IonCard, IonFab, IonFabButton, IonIcon, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonModal, IonGrid, IonRow, IonCol, FilterByOccasion, FilterByCategory],
    providers: [BackedService]
})
export class PipeProjectPage implements OnInit {
    products: IProduct[] = [];
    types1: ProductType[] = ['Bouquet', 'EBouquet'];
    types2: ProductType[] = ['IndoorPlant', 'GiftSet'];
    isModalOpen: boolean = false;
    occasions: string[] = ['Anniversary', 'Graduation', 'Anniversary'];

    constructor(
        private productService: ProductBDReadService,
        protected backedService: BackedService,
        private zone: NgZone
    ) {
        addIcons({add, walletOutline, wallet, trashBin, trashBinOutline});
        backedService.deleteAllBacked();
    }

    ngOnInit(): void {
        this.zone.run(() => {
            this.productService.product$.subscribe((products) => {
                this.products = products;
            })
            this.productService.fetchProducts();
        });
    }

    addBacked(id: number) {
        let obj = this.products.find((item) => item.getID() === id);
        if (obj) {
            this.backedService.addBacked(obj);
        }
    }

    setOpen(isOpen: boolean) {
        this.isModalOpen = isOpen;
    }

    deleteBacked(id: number) {
        let obj = this.products.find((item) => item.getID() === id);
        if (obj) {
            this.backedService.deleteBacked(obj);
        }
    }

    deleteOneBacked(id: number) {
        let obj = this.products.find((item) => item.getID() === id);
        if (obj) {
            this.backedService.deleteOneBacked(obj);
        }
    }
}
