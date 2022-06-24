export class Singleton {
    private message: string;
    private static instance: Singleton;

    private constructor(msg: string) {
        this.message = msg;
    }

    public static getInstance(msg: string): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(msg);
        }

        return Singleton.instance;
    }

    public getMsg(): string {
        return this.message;
    }
}