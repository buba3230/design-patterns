import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardPayments } from './payments';
import { Proxy } from './proxy';
@Component({
    selector: 'app-forest',
    template:
        `
            <h4>Pay without proxy (can get nagative balanc even with incorrect pincode):</h4>
            <p>cardPayments = new CardPayments('1111', 100)</p>
            <p><b>pay(cardPayments, 200)</b> => {{cardPayments.balance}}</p>
            <br>
            <h4>Pay with proxy - we can handle some stuff:</h4>
            <p>proxyIncorrectPin = new Proxy('1111', 100)</p>
            <p><b>pay(proxyIncorrectPin, 50)</b> => {{proxyIncorrectPin.balance}}</p>
            <div *ngFor="let log of proxyIncorrectPin.log">
                {{log}}
            </div>
            <br>
            <p>proxyLowBalance = new Proxy('1234', 1)</p>
            <p><b>pay(proxyLowBalance, 100)</b> => {{proxyLowBalance.balance}}</p>
            <div *ngFor="let log of proxyLowBalance.log">
                {{log}}
            </div>
            <br>
            <p>proxyCardPayments = new Proxy('1234', 500)</p>
            <p><b>pay(proxyCardPayments, 300)</b> => {{proxyCardPayments.balance}}</p>
            <div *ngFor="let log of proxyCardPayments.log">
                {{log}}
            </div>
            
        `,
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProxyComponent implements OnInit {
    realBalanceBefore: number;
    realBalanceAfter: number;

    proxyBalanceBefore: number;
    proxyBalanceAfter: number;

    cardPayments: CardPayments;
    proxyCardPayments: Proxy;
    proxyIncorrectPin: Proxy;
    proxyLowBalance: Proxy;
    constructor() {
        this.cardPayments = new CardPayments('1111', 100);
        this.pay(this.cardPayments, 200);
        this.proxyIncorrectPin = new Proxy('1111', 100);
        this.pay(this.proxyIncorrectPin, 50);
        this.proxyLowBalance = new Proxy('1234', 1);
        this.pay(this.proxyLowBalance, 100);
        this.proxyCardPayments = new Proxy('1234', 500);
        this.pay(this.proxyCardPayments, 300);
    }

    pay(payments: CardPayments | Proxy, cost: number): void {
        payments.pay(cost);
    }

    ngOnInit(): void {
    }
}
