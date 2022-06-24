import { Implementation } from "./color-implementation";

export class SquareAbstraction {
    private implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public getColoredFigure(): string {
        const result = this.implementation.getColor();
        return `Square: with color: ${result}`;
    }
}