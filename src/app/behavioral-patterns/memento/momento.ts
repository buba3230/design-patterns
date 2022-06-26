export interface Memento {
    getMsg(): string;

    getName(): string;

    getDate(): string;
}

export class MementoMessage implements Memento {
    private msg: string;

    private date: string;

    constructor(msg: string) {
        this.msg = msg;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    public getMsg(): string {
        return this.msg;
    }

    public getName(): string {
        return `${this.date} / (${this.msg.slice(0, 9)}...)`;
    }

    public getDate(): string {
        return this.date;
    }
}