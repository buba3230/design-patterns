export interface Handler {
    setNext(handler: Handler): Handler;

    handle(request: string): string;

    clear(): void;
}

abstract class CheckUser implements Handler {
    private nextHandler: Handler | null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }

    public clear(): void {
        this.nextHandler = null;
    }
}

export class CheckForAuthorized extends CheckUser {
    public handle(request: string): string {
        if (request === 'authorized') {
            return `User: is ${request}.`;
        }
        return super.handle(request);

    }
}

export class CheckForAdmin extends CheckUser {
    public handle(request: string): string {
        if (request === 'admin') {
            return `User: is ${request}.`;
        }
        return super.handle(request);

    }
}

export class CheckForSuperuser extends CheckUser {
    public handle(request: string): string {
        if (request === 'superuser') {
            return `User: is ${request}.`;
        }
        return super.handle(request);

    }
}