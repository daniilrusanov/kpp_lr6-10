import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../FlowerDeliveryService/basic/IProduct";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {eProductType, productType} from "../../FlowerDeliveryService/ProductType";
import {ProductFactory} from "../../FlowerDeliveryService/ProductFactory";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonItem
} from "@ionic/angular/standalone";
import {NgIf} from "@angular/common";
import {formsConstructor} from "../../FlowerDeliveryService/FormsConstructor";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  imports: [
    ReactiveFormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonItem,
    NgIf,
    IonButton
  ]
})
export class EditProductComponent implements OnInit {

    @Input() product!: IProduct;
    @Output() productEdit: EventEmitter<IProduct> = new EventEmitter<IProduct>();

    productForm!: FormGroup;
    formats = eProductType;
    types = productType;


    constructor(private fb: FormBuilder) {
    }

    onSubmit(): void {
        if (this.productForm.valid) {
            const formData = this.productForm.value;
            formData.type = this.product.getType();
            const product = ProductFactory.createProduct(this.productForm.value);
            this.productEdit.emit(product);
        } else {
            console.error('Form is invalid');
        }
    }

    ngOnInit() {
        this.productForm = this.fb.group({
            name: [this.product.getName(), [Validators.required, Validators.minLength(3)],],
            price: [this.product.getPrice(), [Validators.required, Validators.min(0)],],
        });
        formsConstructor(this.product.getType(), this.productForm, this.fb);
    }

}
