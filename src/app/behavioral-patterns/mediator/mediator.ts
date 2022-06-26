interface Mediator {
    changePrice(sender: object, event: string, differance: number): void;
}

export class MillMediator implements Mediator {

    private mill: Mill;

    private bun: Bun;

    private bread: Bread;

    constructor(mill: Mill, bun: Bun, bread: Bread) {
        this.mill = mill;
        this.mill.setMediator(this);
        this.bun = bun;
        this.bun.setMediator(this);
        this.bread = bread;
        this.bread.setMediator(this);
    }

    public changePrice(sender: object, event: string, differance: number): void {
        if (event === 'flour') {
            this.bun.changePrice(differance);
            this.bread.changePrice(differance);
        }
    }
}

class BaseProduct {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

export class Mill extends BaseProduct {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        super();
        this.name = name;
        this.price = price
    }
    public changePrice(differance: number): void {
        this.mediator.changePrice(this, 'flour', differance);
    }

    public getInfo(): string {
        return `Mill: ${this.name}, cost: ${this.price}`
    }
}

export class Bun extends BaseProduct {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        super();
        this.name = name;
        this.price = price
    }
    public changePrice(differance: number): void {
        this.price += differance;
    }

    public getInfo(): string {
        return `Bun: ${this.name}, cost: ${this.price}`
    }
}

export class Bread extends BaseProduct {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        super();
        this.name = name;
        this.price = price
    }
    public changePrice(differance: number): void {
        this.price += differance;
    }

    public getInfo(): string {
        return `Bread: ${this.name}, cost: ${this.price}`
    }
}