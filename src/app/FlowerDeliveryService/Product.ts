import { IProduct } from "./IProduct";

export abstract class Product implements IProduct {
    private _id: number;
    private _name: string;
    private _price: number;
    private _type: string;
    private _details: string[];

    protected constructor(id: number, name: string, price: number, type: string = 'Product', details: string[] = []) {
        if(id < 0) throw new Error("Product ID should be greater than 0");
        if(price < 1) throw new Error("Product price should be greater than 1");
        this._id = id;
        this._name = name;
        this._price = price;
        this._type = type;
        this._details = details;
    }

    getID(): number {
        return this._id;
    }

    getName(): string {
        return this._name;
    }

    getPrice(): number {
        return this._price;
    }

    getType(): string {
        return this._type;
    }

    getDetails(): string[] {
        return this._details;
    }

    set id(value: number) {
        this._id = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set price(value: number) {
        this._price = value;
    }

    set type(value: string) {
        this._type = value;
    }

    set details(value: string[]) {
        this._details = value;
    }
}
