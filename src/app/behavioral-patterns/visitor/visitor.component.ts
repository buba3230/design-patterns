import { Component, OnInit } from '@angular/core';
import { CarCollection, CarVisitor, Collection, MotoCollection, MotoVisitor, Visitor } from './visitor';

@Component({
    selector: 'app-visitor',
    template:
        `
            <h4>Visitor:</h4>
            <p>visitor1 = new CarVisitor()</p>
            <p>visitCollections(collections, visitor1)</p>
            <div *ngFor="let item of log">
                {{item}}
            </div>
            <p>visitor2 = new MotoVisitor()</p>
            <p>visitCollections(collections, visitor2)</p>
            <div *ngFor="let item of log">
                {{item}}
            </div>
        `,
    styleUrls: []
})
export class VisitorComponent implements OnInit {
    log: string[] = [];
    constructor() {
        const collections = [
            new CarCollection([{ 'name': 'Volvo', 'cost': 5000 }, { 'name': 'BMW', 'cost': 6000 }]),
            new MotoCollection([{ 'name': 'Suzuki', 'cost': 2500 }, { 'name': 'Harley', 'cost': 7500 }]),
        ];

        const visitor1 = new CarVisitor();
        this.visitCollections(collections, visitor1);
        this.log = [];
        const visitor2 = new MotoVisitor();
        this.visitCollections(collections, visitor2);
    }

    ngOnInit(): void {
    }

    visitCollections(collections: Collection[], visitor: Visitor) {
        for (const collection of collections) {
            this.log.push(collection.accept(visitor));
        }
    }
}
