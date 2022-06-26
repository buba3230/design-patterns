import { Component, OnInit } from '@angular/core';
import { Context, StopState } from './state';

@Component({
    selector: 'app-state',
    template:
        `
            <h4>State</h4>
            <p>context = new Context(new StopState())</p>
            <p>context.stop()</p>
            <p>context.run()</p>
            <p>context.run()</p>
            <p>context.stop()</p>
            <p>context.stop()</p>
            <div *ngFor="let item of log">
                {{item}}
            </div>
        `,
    styleUrls: []
})
export class StateComponent implements OnInit {
    context = new Context(new StopState());
    log: string[] = [];
    constructor() {
        this.log.push(this.context.stop());
        this.log.push(this.context.run());
        this.log.push(this.context.run());
        this.log.push(this.context.stop());
        this.log.push(this.context.stop());
    }

    ngOnInit(): void {

    }
}
