import { Implementation } from "./color-implementation";

export class CircleAbstraction {
    private implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public getColoredFigure(): string {
        const result = this.implementation.getColor();
        return `Circle: with color: ${result}`;
    }
}