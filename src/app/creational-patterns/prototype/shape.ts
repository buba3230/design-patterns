
interface PrototypeInterface {
    clone(): this;
}


export class Shape implements PrototypeInterface {
    x: number;
    y: number;
    color: string;
    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    public clone(): this {
        return Object.create(this);
    }
}