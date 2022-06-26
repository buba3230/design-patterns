import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Caretaker } from './caretaker';
import { Originator } from './originator';

@Component({
    selector: 'app-memento',
    template:
        `
            <h4>Memento:</h4>
            <input type="text" name="msg" [(ngModel)]="msg">
            <br><br>
            <button (click)="save()">Save</button>
            <button (click)="undo()">Undo</button>
            <button (click)="getHistory()">History</button>
            <h4 *ngIf="log">Log:</h4>
            <div *ngFor="let item of log">
                {{item}}
            </div>
            <h4 *ngIf="history">History:</h4>
            <div *ngFor="let item of history">
                {{item}}
            </div>
            
        `,
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MementoComponent implements OnInit {
    msg = '';
    originator = new Originator(this.msg);
    caretaker = new Caretaker(this.originator);
    history: string[];
    log: string[];
    constructor() {

    }

    ngOnInit(): void {
    }

    save(): void {

        this.caretaker.backup();
        this.originator.changeMsg(this.msg);
        this.log = this.caretaker.getLog();
    }

    undo(): void {
        this.caretaker.undo();
        this.log = this.caretaker.getLog();
        this.msg = this.originator.getMsg();
    }

    getHistory(): void {
        this.history = this.caretaker.getHistory();
    }



}
