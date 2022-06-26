import { Component, OnInit } from '@angular/core';
import { IPhoneObserver, SamsungObserver } from './observer';
import { PhoneSaleSubject } from './subject';

@Component({
    selector: 'app-observer',
    template:
        `
            <h4>Observer:</h4>
            <p>phoneSale = new PhoneSaleSubject()</p>
            <p>observer1 = new IPhoneObserver()</p>
            <p>observer2 = new SamsungObserver()</p>
            <br>
            <p>phoneSale.attach(observer1)</p>
            <p>phoneSale.attach(observer2)</p>
            <br>
            <p>phoneSale.setSaleOnPhone('IPhone')</p>
            <br>
            <p>phoneSale.detach(observer1)</p>
            <br>
            <p>phoneSale.setSaleOnPhone('Samsung')</p>
            <h4>Log:</h4>
            <div *ngFor="let item of log">
                {{item}}
            </div>
        `,
    styleUrls: []
})
export class ObserverComponent implements OnInit {
    phoneSale = new PhoneSaleSubject();
    observer1 = new IPhoneObserver();
    observer2 = new SamsungObserver();
    log: string[] = [];
    constructor() {


    }

    ngOnInit(): void {
        this.log.push(this.phoneSale.attach(this.observer1));
        this.log.push(this.phoneSale.attach(this.observer2));

        this.log.push(this.phoneSale.setSaleOnPhone('IPhone'));

        this.log.push(this.phoneSale.detach(this.observer1));

        this.log.push(this.phoneSale.setSaleOnPhone('Samsung'));
    }
}
