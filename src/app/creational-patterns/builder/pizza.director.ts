import { Builder } from "./builder.interface";


export class PizzaDirector {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalProductsPizza(): void {
        this.builder.addKetchup();
        this.builder.addSausage();
    }

    public buildMaximalProductsPizza(): void {
        this.builder.addCheese();
        this.builder.addKetchup();
        this.builder.addMayonnaise();
        this.builder.addMeat();
        this.builder.addSausage();
        this.builder.addPineapple();
        this.builder.addTomatoes();
    }
}