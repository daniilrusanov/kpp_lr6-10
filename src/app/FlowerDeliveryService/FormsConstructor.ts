import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {productType} from "./ProductType";
import {durationValidator} from "./validators/DurationValidator";
import {dateValidator} from "./validators/DateValidator";

export function formsConstructor(
    type: string,
    productForm: FormGroup,
    fb: FormBuilder
) {
    const controlsToRemove = [
        'name',
        'price'
    ];
    controlsToRemove.forEach(control => {
        if (productForm.contains(control)) {
            productForm.removeControl(control);
        }
    });
    productForm.addControl('name', fb.control('', Validators.required));
    productForm.addControl('price', fb.control('', [Validators.required, Validators.min(20)]));
    if (type === productType[0] || type === productType[1] || type === productType[3]) {
        productForm.addControl('flowerCount', fb.control('',[Validators.required,  Validators.min(20)]));
        productForm.addControl('packageType', fb.control('', Validators.required));
        if(type === productType[3]) {
            productForm.addControl('format', fb.control('', Validators.required));
        }
    } else if (type === productType[2]) {
        productForm.addControl('duration', [Validators.required, durationValidator]);
        productForm.addControl('date', [Validators.required, dateValidator]);
    }
}
