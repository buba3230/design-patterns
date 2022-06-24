import { Component, OnInit } from '@angular/core';
import { Shape } from './shape';

@Component({
  selector: 'app-clone',
  template:
    `<h4>Shape:</h4>
  <p>X: {{shape1.x}}</p>
  <p>Y: {{shape1.y}}</p>
  <p>Color: {{shape1.color}}</p>
  <h4>Cloned with prototype:</h4>
  <p>X: {{shape2.x}}</p>
  <p>Y: {{shape2.y}}</p>
  <p>Color: {{shape2.color}}</p>`,
  styleUrls: []
})
export class CloneComponent implements OnInit {
  shape1 = new Shape(5, 10, 'red');
  shape2 = this.shape1.clone();
  constructor() { }

  ngOnInit(): void {
  }

}
