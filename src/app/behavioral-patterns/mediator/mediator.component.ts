import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Bread, Bun, Mill, MillMediator } from './mediator';

@Component({
    selector: 'app-mediator',
    template:
        `
            <h4>Mediator: </h4>
            <p>mill = new Mill('Class A', 25)</p>
            <p>bun = new Bun('Yammy bun', 10)</p>
            <p>bread = new Bread('White bread', 20)</p>
            <br>
            <p>mediator = new MillMediator(mill, bun, bread)</p>
            <br>
            <button (click)="changeMillPrice()">Change mill price by 3 - will affect bun and bread price</button>
            <p><b>bun.getInfo()</b> => {{bun.getInfo()}}</p>
            <p><b>bread.getInfo()</b> => {{bread.getInfo()}}</p>
        `,
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediatorComponent implements OnInit {
    mill = new Mill('Class A', 25);
    bun = new Bun('Yammy bun', 10);
    bread = new Bread('White bread', 20);
    mediator = new MillMediator(this.mill, this.bun, this.bread);
    constructor() {

    }

    ngOnInit(): void {
    }

    changeMillPrice(): void {
        this.mill.changePrice(3);
    }
}
