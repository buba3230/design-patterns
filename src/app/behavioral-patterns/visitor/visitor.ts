interface Item {
    name: string;
    cost: number;
}

export interface Collection {
    accept(visitor: Visitor): string;
}

export class CarCollection implements Collection {
    cars: Item[];

    constructor(collection: Item[]) {
        this.cars = collection;
    }

    public accept(visitor: Visitor): string {
        return visitor.visitCarCollection(this);
    }

    public getCarName(): string[] {
        return this.cars.map(car => car.name);
    }
}

export class MotoCollection implements Collection {
    motos: Item[];

    constructor(collection: Item[]) {
        this.motos = collection;
    }

    public accept(visitor: Visitor): string {
        return visitor.visitMotoCollection(this);
    }

    public getMotoName(): string[] {
        return this.motos.map(moto => moto.name);
    }
}

export interface Visitor {
    visitCarCollection(element: CarCollection): string;

    visitMotoCollection(element: MotoCollection): string;
}

export class CarVisitor implements Visitor {
    public visitCarCollection(element: CarCollection): string {
        return `${element.getCarName()} + from CarVisitor`;
    }

    public visitMotoCollection(element: MotoCollection): string {
        return `${element.getMotoName()} + from CarVisitor`;
    }
}

export class MotoVisitor implements Visitor {
    public visitCarCollection(element: CarCollection): string {
        return `${element.getCarName()} + from MotoVisitor`;
    }

    public visitMotoCollection(element: MotoCollection): string {
        return `${element.getMotoName()} + from MotoVisitor`;
    }
}