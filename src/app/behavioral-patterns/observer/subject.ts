import { Observer } from "./observer";

export interface Subject {
    attach(observer: Observer): void;

    detach(observer: Observer): void;

    notify(): void;
}

export class PhoneSaleSubject implements Subject {

    public phone: string;

    private observers: Observer[] = [];

    public attach(observer: Observer): string {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return 'Subject: Observer has been attached already.';
        }

        this.observers.push(observer);
        return 'Subject: Attached an observer.';
    }

    public detach(observer: Observer): string {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return 'Subject: Nonexistent observer.';
        }

        this.observers.splice(observerIndex, 1);
        return 'Subject: Detached an observer.';
    }

    public notify(): string {
        const log: string[] = [];
        log.push('Subject: Notifying observers...');
        for (const observer of this.observers) {
            log.push(observer.update(this));
        }
        return log.join('\n');
    }

    public setSaleOnPhone(phone: string): string {
        this.phone = phone;
        const notifyResult = this.notify();
        return `Subject: sale was set on: ${this.phone}\n${notifyResult}`;
    }

}