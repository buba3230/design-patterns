import { NotifcatorInterface } from "./notificator";

class Decorator implements NotifcatorInterface {
    msg: string;
    protected notificator: NotifcatorInterface;

    constructor(notificator: NotifcatorInterface) {
        this.notificator = notificator;
    }

    public sendMsg(platform?: string): string {
        return this.notificator.sendMsg(platform);
    }
}

export class FaceBookDecorator extends Decorator {
    platform = 'Facebook';
    constructor(notificator: NotifcatorInterface) {
        super(notificator);
    }

    public sendMsg(): string {
        return super.sendMsg(this.platform);
    }
}

export class TwitterDecorator extends Decorator {
    platform = 'Twitter';
    constructor(notificator: NotifcatorInterface) {
        super(notificator);
    }

    public sendMsg(): string {
        return super.sendMsg(this.platform);
    }
}

export class InstagramDecorator extends Decorator {
    platform = 'Instagram';
    constructor(notificator: NotifcatorInterface) {
        super(notificator);
    }

    public sendMsg(): string {
        return super.sendMsg(this.platform);
    }
}