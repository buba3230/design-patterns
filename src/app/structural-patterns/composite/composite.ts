export abstract class Order {
    protected parent!: Order | null;

    public setParent(parent: Order | null) {
        this.parent = parent;
    }

    public getParent(): Order | null {
        return this.parent;
    }

    public add(order: Order): void { }

    public remove(order: Order): void { }

    public isComposite(): boolean {
        return false;
    }

    public abstract calculatePrice(): number;
}
