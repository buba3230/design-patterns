import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Cook, LunchOrder, PayForOrder, SimpleOrder, Waitress } from './command';

@Component({
    selector: 'app-command',
    template:
        `
            <h4>Simple order:</h4>
            <p>waitress.setOnStart(new SimpleOrder('Soda'))</p>
            <p>waitress.setOnStart(new PayForOrder(2))</p>
            <p><b>waitress.receiveOrder()</b> => </p>
            <div *ngFor="let step of simpleOrder">
                {{step}}
            </div>
            <h4>Complex order:</h4>
            <p>cook = new Cook()</p>
            <p>waitress.setOnStart(new LunchOrder(cook, 'Sandwich with cheese', 'Big Fries', 'Americano coffee'))</p>
            <p>waitress.setOnStart(new PayForOrder(10))</p>
            <p><b>waitress.receiveOrder()</b> => </p>
            <div *ngFor="let step of lunchOrder">
                {{step}}
            </div>
        `,
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommandComponent implements OnInit {
    waitress = new Waitress();
    simpleOrder: string[];
    waitress2 = new Waitress();
    lunchOrder: string[];
    constructor() {
        this.waitress.setOnStart(new SimpleOrder('Soda'));
        this.waitress.setOnFinish(new PayForOrder(2));
        this.simpleOrder = this.waitress.receiveOrder();

        const cook = new Cook();
        this.waitress2.setOnStart(new LunchOrder(cook, 'Sandwich with cheese', 'Big Fries', 'Americano coffee'));
        this.waitress2.setOnFinish(new PayForOrder(10));
        this.lunchOrder = this.waitress2.receiveOrder();
    }

    ngOnInit(): void {
    }
}
