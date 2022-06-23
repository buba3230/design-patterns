import { Builder } from './builder.interface';

class Pizza {
    public products: string[] = [];

    public productsList(): string {
        return this.products.join(', ');
    }
}

export class PizzaBuilder implements Builder {
    private pizza: Pizza;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.pizza = new Pizza();
    }

    public addCheese(): void {
        this.pizza.products.push('Cheese');
    }

    public addMeat(): void {
        this.pizza.products.push('Meat');
    }

    public addSausage(): void {
        this.pizza.products.push('Sausage');
    }

    public addTomatoes(): void {
        this.pizza.products.push('Tomatoes');
    }

    public addPineapple(): void {
        this.pizza.products.push('Pineapple');
    }

    public addKetchup(): void {
        this.pizza.products.push('Ketchup');
    }

    public addMayonnaise(): void {
        this.pizza.products.push('Mayonnaise');
    }

    public getPizza(): Pizza {
        const pizza = this.pizza;
        this.reset();
        return pizza;
    }
}