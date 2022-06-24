import { RoundPeg } from './round-peg';

export class RoundHole {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    fits(peg: RoundPeg) {
        return this.getRadius() >= peg.getRadius()
    }
}
