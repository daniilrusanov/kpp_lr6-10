import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {eProductType, productType, ProductType} from "../../FlowerDeliveryService/ProductType";
import {IProduct} from "../../FlowerDeliveryService/basic/IProduct";
import {formsConstructor} from "../../FlowerDeliveryService/FormsConstructor";
import {ProductFactory} from "../../FlowerDeliveryService/ProductFactory";
import {CommonModule} from '@angular/common';

import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle, IonCheckbox,
    IonInput,
    IonItem, IonLabel,
    IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView
} from "@ionic/angular/standalone";

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss'],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonItem,
        IonInput,
        IonSegment,
        IonSegmentButton,
        IonLabel,
        IonSegmentView,
        IonSegmentContent,
        IonCheckbox,
        IonButton
    ]
})
export class AddProductComponent implements OnInit {

    productForm!: FormGroup;
    currentType: ProductType = 'Bouquet';
    types = productType
    formats = eProductType;

    @Output() productAdd: EventEmitter<IProduct> = new EventEmitter<IProduct>();

    constructor(private fb: FormBuilder) {
        this.productForm = this.fb.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          price: [null, [Validators.required, Validators.min(1)]],
          flowerCount: [null],
          packageType: [''],
          format: [''],
          duration: [''],
          date: ['']
        });
    }

    onEProductChange(change: any) {
        if (change) this.onTypeChange(this.types[3]);
        else this.currentType = this.types[0];
    }

    onTypeChange(type: any) {
        this.currentType = type as ProductType;
        formsConstructor(type, this.productForm, this.fb);
    }

    onSubmit(): void {
        if (this.isFormValid()) {
            const formData = this.productForm.value;
            formData.type = this.currentType;
            const product = ProductFactory.createProduct(formData);
            this.productAdd.emit(product);
        } else {
            console.error('Form is invalid');
        }
    }

  isFormValid(): boolean {
    if (this.currentType === this.types[0]) {
      return this.productForm.get('name')?.valid &&
          this.productForm.get('price')?.valid &&
          this.productForm.get('flowerCount')?.value > 20 &&
          this.productForm.get('packageType')?.value;
    }
    else if (this.currentType === this.types[3]) {
      return this.productForm.get('name')?.valid &&
          this.productForm.get('price')?.valid &&
          this.productForm.get('flowerCount')?.value > 20 &&
          this.productForm.get('packageType')?.value &&
          this.productForm.get('format')?.value;
    }

    if (this.currentType === this.types[2]) {
      return this.productForm.get('name')?.valid &&
          this.productForm.get('price')?.valid &&
          this.productForm.get('duration')?.value &&
          this.productForm.get('date')?.value;
    }

    return false;
  }


  ngOnInit() {
        this.onTypeChange(this.currentType);
    }

}
