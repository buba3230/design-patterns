import { Cats } from "./cats";
import { Dogs } from "./dogs";

export class AnimalsFacade {
    protected cats: Cats;
    protected dogs: Dogs;

    constructor(cats: Cats = null, dogs: Dogs = null) {
        this.cats = cats || new Cats();
        this.dogs = dogs || new Dogs();
    }

    getAnimals(): string {
        return this.cats.getCats().concat(this.dogs.getDogs()).join(', ');
    }

}