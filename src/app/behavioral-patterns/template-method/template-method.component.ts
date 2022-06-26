import { Component, OnInit } from '@angular/core';
import { AbstractClass, MyClass1, MyClass2 } from './abstract';


@Component({
    selector: 'app-template-method',
    template:
        `
            <h4>Template method:</h4>
            <p>myClass1Abstract = new MyClass1()</p>
            <p><b>myClass1Abstract.templateMethod()</b> =></p>
            <div *ngFor="let item of myClass1Log">
                {{item}}
            </div>
            <br>
            <p>myClass2Abstract = new MyClass2()</p>
            <p><b>myClass2Abstract.templateMethod()</b> =></p>
            <div *ngFor="let item of myClass2Log">
                {{item}}
            </div>
        `,
    styleUrls: []
})
export class TemplateMethodComponent implements OnInit {
    myClass1Abstract: AbstractClass;
    myClass1Log: string[];
    myClass2Abstract: AbstractClass;
    myClass2Log: string[];
    constructor() {
        this.myClass1Abstract = new MyClass1();
        this.myClass1Log = this.myClass1Abstract.templateMethod();
        this.myClass2Abstract = new MyClass2();
        this.myClass2Log = this.myClass2Abstract.templateMethod();
    }

    ngOnInit(): void {

    }
}
