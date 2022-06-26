import { PhoneSaleSubject, Subject } from "./subject";

export interface Observer {
    update(subject: Subject): string;
}

export class IPhoneObserver implements Observer {
    public update(subject: Subject): string {
        if (subject instanceof PhoneSaleSubject && subject.phone === 'IPhone') {
            return 'IPhoneObserver: Reacted to the sale.';
        }
    }
}

export class SamsungObserver implements Observer {
    public update(subject: Subject): string {
        if (subject instanceof PhoneSaleSubject && subject.phone === 'Samsung') {
            return 'SamsungObserver: Reacted to the sale.';
        }
    }
}