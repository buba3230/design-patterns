import { Memento, MementoMessage } from "./momento";

export class Originator {
    private msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }

    public changeMsg(msg: string): void {
        this.msg = msg;
    }

    public getMsg(): string {
        return this.msg;
    }

    public save(): Memento {
        return new MementoMessage(this.msg);
    }

    public restore(memento: Memento): void {
        this.msg = memento.getMsg();
    }
}