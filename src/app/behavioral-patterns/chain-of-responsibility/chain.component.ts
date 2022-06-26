import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CheckForAdmin, CheckForAuthorized, CheckForSuperuser, Handler } from './handler';

@Component({
    selector: 'app-forest',
    template:
        `
            <h4>Single handle:</h4>
            <p>authorized = new CheckForAuthorized()</p>
            <p><b>checkUser(authorized)</b> => </p>
            <div *ngFor="let chain of chain_one">
                {{chain}}
            </div>
            <h4>All chain:</h4>
            <p>authorized = new CheckForAuthorized()</p>
            <p>admin = new CheckForAdmin()</p>
            <p>superuser = new CheckForSuperuser()</p>
            <p>authorized.setNext(admin).setNext(superuser)</p>
            <p><b>checkUser(authorized)</b> => </p>
            <div *ngFor="let chain of chain_two">
                {{chain}}
            </div>
            <h4>Partial handle:</h4>
            <p>authorized.setNext(superuser)</p>
            <p><b>checkUser(authorized)</b> => </p>
            <div *ngFor="let chain of chain_three">
                {{chain}}
            </div>

        `,
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChainComponent implements OnInit {

    authorized = new CheckForAuthorized();
    admin = new CheckForAdmin();
    superuser = new CheckForSuperuser();

    chain_one: string[];
    chain_two: string[];
    chain_three: string[];
    constructor() {
        this.chain_one = this.checkUser(this.authorized);
        this.authorized.clear();
        this.authorized.setNext(this.admin).setNext(this.superuser);
        this.chain_two = this.checkUser(this.authorized);
        this.authorized.clear();
        this.authorized.setNext(this.superuser);
        this.chain_three = this.checkUser(this.authorized);

    }

    ngOnInit(): void {
    }

    checkUser(handler: Handler): string[] {
        const userTypes = ['authorized', 'admin', 'superuser'];
        const log: string[] = [];
        for (const type of userTypes) {
            const result = handler.handle(type);
            if (result) {
                log.push(result);
            } else {
                console.log(`User is not: ${type}`);
            }
        }
        return log;
    }
}
