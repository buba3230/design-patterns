import { Memento } from "./momento";
import { Originator } from "./originator";

export class Caretaker {

    private log: string[] = [];

    private mementos: Memento[] = [];

    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        this.log.push('Caretaker: Saving Originator\'s msg...');
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();

        this.log.push(`Caretaker: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }

    public getHistory(): string[] {
        const history: string[] = [];
        for (const memento of this.mementos) {
            history.push(memento.getName());
        }
        return history;
    }

    public getLog(): string[] {
        return this.log;
    }
}