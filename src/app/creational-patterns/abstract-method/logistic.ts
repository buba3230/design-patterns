export interface Transport {
    addToLogistics(): string;
}

export abstract class Logistics {
    public abstract createTransport(): Transport;

    public planDelivery(): string {
        const transport = this.createTransport();
        return `${transport.addToLogistics()} and will be used in delivery plan`;
    }
}