import { Logistics, Transport } from "./logistic";

class Ship implements Transport {
    public addToLogistics(): string {
        return 'Ship was added to ligistics';
    }
}

export class SeaLogistics extends Logistics {
    public createTransport(): Transport {
        return new Ship();
    }
}