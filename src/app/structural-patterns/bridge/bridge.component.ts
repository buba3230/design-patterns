import { Component, OnInit } from '@angular/core';
import { CircleAbstraction } from './circle-abstraction';
import { BlueFigure, RedFigure } from './color-implementation';
import { SquareAbstraction } from './square-abstraction';

@Component({
    selector: 'app-bridge',
    template:
        `
        <h4>We have Square and Circle abstracion, plus Red and Blue implementation</h4>
        <p>red = new RedFigure()</p>
        <p>blue = new BlueFigure()</p>
        <br>
        <p>redSquare = new SquareAbstraction(red)</p>
        <p>redSquare.getColoredFigure() => {{redSquare.getColoredFigure()}}</p>
        <br>
        <p>blueSquare = new SquareAbstraction(blue)</p>
        <p>blueSquare.getColoredFigure() => {{blueSquare.getColoredFigure()}}</p>
        <br>
        <p>redCircle = new CircleAbstraction(red)</p>
        <p>redCircle.getColoredFigure() => {{redCircle.getColoredFigure()}}</p>
        <br>
        <p>blueCircle = new CircleAbstraction(blue)</p>
        <p>blueCircle.getColoredFigure() => {{blueCircle.getColoredFigure()}}</p>
        <br>
        `,
    styleUrls: []
})
export class BridgeComponent implements OnInit {
    red = new RedFigure();
    blue = new BlueFigure();

    redSquare = new SquareAbstraction(this.red);
    blueSquare = new SquareAbstraction(this.blue);

    redCircle = new CircleAbstraction(this.red);
    blueCircle = new CircleAbstraction(this.blue);

    constructor() { }

    ngOnInit(): void {
    }

}
