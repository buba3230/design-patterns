import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Cats } from './cats';
import { Dogs } from './dogs';
import { AnimalsFacade } from './facade';

@Component({
    selector: 'app-facade',
    template:
        `
            <h4>We have cats:</h4>
            <p>cats = new Cats().getCats()</p>
            <div *ngFor="let cat of cats">
                {{cat}}
            </div>
            <h4>We have dogs:</h4>
            <p>dogs = new Dogs().getDogs()</p>
            <div *ngFor="let dog of dogs">
                {{dog}}
            </div>
            <h4>We have facade to gain acces to animals:</h4>
            <p>facade = new AnimalsFacade()</p>
            <p><b>this.facade.getAnimals()</b> => {{this.animals}}</p>
        `,
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacadeComponent implements OnInit {

    cats = new Cats().getCats();
    dogs = new Dogs().getDogs();

    facade = new AnimalsFacade();
    animals: string;

    constructor() {
        this.animals = this.facade.getAnimals();
    }

    ngOnInit(): void {
    }

}
