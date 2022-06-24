import { Order } from "./composite";

export class Box extends Order {
    protected children: Order[] = [];

    public add(order: Order): void {
        this.children.push(order);
        order.setParent(this);
    }

    public remove(order: Order): void {
        const componentIndex = this.children.indexOf(order);
        this.children.splice(componentIndex, 1);

        order.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public calculatePrice(): number {
        const prices = [];
        for (const child of this.children) {
            prices.push(child.calculatePrice());
        }

        return prices.reduce((a, b) => a + b, 0);
    }
}