import { IProduct } from "./IProduct";

export abstract class Product implements IProduct {
    private id: number;
    private name: string;
    private price: number;
    private type: string;
    private details: string[];

    protected constructor(id: number, name: string, price: number, type: string = 'Product', details: string[] = []) {
        if(id < 0) throw new Error("Product ID should be greater than 0");
        if(price < 1) throw new Error("Product price should be greater than 1");
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.details = details;
    }

    getDetails(): string[] {
        return this.details;
    }

    getID(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    getType(): string {
        return this.type;
    }
}
