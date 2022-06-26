import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WordsCollection } from './iterator';

@Component({
    selector: 'app-iterator',
    template:
        `
            <h4>Iterator:</h4>
            <p>collection = new WordsCollection()</p>
            <p>collection.addItem('First')</p>
            <p>collection.addItem('Second')</p>
            <p>collection.addItem('Third')</p>
            <p><b>Straight:</b></p>
            <p>iterator = collection.getIterator()</p>
            <div *ngFor="let item of straight">
                {{item}}
            </div>
            <p><b>Reverse:</b></p>
            <p>reverseIterator = collection.getReverseIterator()</p>
            <div *ngFor="let item of reverse">
                {{item}}
            </div>

        `,
    styleUrls: [],
})
export class IteratorComponent implements OnInit {
    collection = new WordsCollection();
    iterator = this.collection.getIterator();

    straight: string[] = [];
    reverse: string[] = [];
    constructor() {
        this.collection.addItem('First');
        this.collection.addItem('Second');
        this.collection.addItem('Third');

        while (this.iterator.valid()) {
            this.straight.push(this.iterator.next());
        }

        const reverseIterator = this.collection.getReverseIterator();

        while (reverseIterator.valid()) {
            this.reverse.push(reverseIterator.next());
        }
    }

    ngOnInit(): void {
    }
}
