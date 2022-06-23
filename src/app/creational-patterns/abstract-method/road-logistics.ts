import { Logistics, Transport } from "./logistic";

class Truck implements Transport {
    public addToLogistics(): string {
        return 'Track was added to ligistics';
    }
}

export class RoadLogistics extends Logistics {
    public createTransport(): Transport {
        return new Truck();
    }
}