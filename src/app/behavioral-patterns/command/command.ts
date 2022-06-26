interface Command {
    execute(): string[];
}

export class SimpleOrder implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): string[] {
        return [`Waitress: i will bring you (${this.payload}) in 2 minutes`];
    }
}

export class PayForOrder implements Command {
    private payload: number;

    constructor(payload: number) {
        this.payload = payload;
    }

    public execute(): string[] {
        return [`Waitress: your have give me ${this.payload}$ for your order...`];
    }
}

export class LunchOrder implements Command {
    private cook: Cook;

    private a: string;

    private b: string;

    private c: string;

    constructor(cook: Cook, a: string, b: string, c: string) {
        this.cook = cook;
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public execute(): string[] {
        const lunch: string[] = [];

        lunch.push(this.cook.makeSandvich(this.a));
        lunch.push(this.cook.makeFries(this.b));
        lunch.push(this.cook.makeCofee(this.c));
        lunch.push('Waitress: i will bring you lunch in 10 minutes');

        return lunch;
    }
}

export class Cook {
    public makeSandvich(a: string): string {
        return `Cook: Working on (${a}...)`;
    }

    public makeFries(b: string): string {
        return `Cook: Also working on (${b}...)`;
    }

    public makeCofee(c: string): string {
        return `Cook: Also working on (${c}...)`;
    }
}

export class Waitress {
    private onStart: Command;

    private onFinish: Command;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public setOnFinish(command: Command): void {
        this.onFinish = command;
    }

    private isCommand(object): object is Command {
        return object.execute !== undefined;
    }

    public receiveOrder(): string[] {
        let order: string[] = [];
        order.push('Waitress give some menu...');
        if (this.isCommand(this.onStart)) {
            order = order.concat(this.onStart.execute());
        }

        order.push('You have to pay after eating...');

        if (this.isCommand(this.onFinish)) {
            order = order.concat(this.onFinish.execute());
        }
        return order;
    }

}