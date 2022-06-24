import { RoundPeg } from "./round-peg"
import { SquarePeg } from "./square-peg"

export class SquarePegAdapter extends RoundPeg {
    private peg: SquarePeg;

    constructor(squarePeg: SquarePeg) {
        super(squarePeg.width);
        this.peg = squarePeg;
    }

    getRadius() {
        return this.peg.getWidth() * Math.sqrt(2) / 2;
    }
}
