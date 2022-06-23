import { Component, OnInit } from '@angular/core';
import { Shape } from '../shape';

@Component({
  selector: 'app-clone',
  templateUrl: './clone.component.html',
  styleUrls: ['./clone.component.scss']
})
export class CloneComponent implements OnInit {
  shape1 = new Shape(5, 10, 'red');
  shape2 = this.shape1.clone();
  constructor() { }

  ngOnInit(): void {
  }

}
