
export interface NotifcatorInterface {
    sendMsg(platform?: string): string;
}

export class Notificator implements NotifcatorInterface {
    msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }

    sendMsg(platform?: string): string {
        if (platform) {
            return `${platform}: ${this.msg}`;
        }
        return this.msg;
    }
}