
export interface Payments {
    balance: number;
    pay(cost: number): void;
}

export class CardPayments implements Payments {
    pincode = '1234';
    isPinCorrect: boolean;
    balance: number;

    constructor(pin: string, balance: number) {
        this.balance = balance;
        this.pincode === pin ? this.isPinCorrect = true : this.isPinCorrect = false;
    }

    pay(cost: number): void {
        this.balance = this.balance - cost;
    }
}