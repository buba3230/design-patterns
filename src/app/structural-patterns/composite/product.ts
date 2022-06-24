import { Order } from "./composite";

export class Product extends Order {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        super();
        this.name = name;
        this.price = price;
    }
    public calculatePrice(): number {
        return this.price;
    }
}