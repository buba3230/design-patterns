import { CardPayments } from "./payments";

export class Proxy implements CardPayments {
    private realCardPayments: CardPayments;
    pincode: string;
    isPinCorrect: boolean;
    balance: number;
    log: string[] = [];

    constructor(pin: string, balance: number) {
        this.realCardPayments = new CardPayments(pin, balance);
        this.pincode = this.realCardPayments.pincode;
        this.isPinCorrect = this.realCardPayments.isPinCorrect;
        this.balance = this.realCardPayments.balance;

    }

    checkAccess(): boolean {
        return this.isPinCorrect;
    }

    checkBalance(cost: number): boolean {
        return this.balance > cost;
    }

    pay(cost: number): void {
        if (this.checkAccess()) {
            if (this.checkBalance(cost)) {
                this.realCardPayments.pay(cost);
                this.log.push(`You pay ${cost}. Balance = ${this.realCardPayments.balance}`);
            } else {
                this.log.push(`${cost} is more than you can spend !!!`);
            }
        }
        else {
            this.log.push(`Pincode ${this.pincode} is incorrect !!!`);
        }
    }
}