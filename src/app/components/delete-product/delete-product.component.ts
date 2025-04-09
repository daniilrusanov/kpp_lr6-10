import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel
} from "@ionic/angular/standalone";
import {IProduct} from "../../FlowerDeliveryService/basic/IProduct";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton
  ]
})
export class DeleteProductComponent  implements OnInit {

  @Input() product!: IProduct;
  @Output() confirm: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  onDelete(): void {
    this.confirm.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

  ngOnInit(): void {}

}
