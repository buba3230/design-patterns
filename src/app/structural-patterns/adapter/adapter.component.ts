import { Component, OnInit } from '@angular/core';
import { SquarePegAdapter } from './adapter';
import { RoundHole } from './round-hole';
import { RoundPeg } from './round-peg';
import { SquarePeg } from './square-peg';

@Component({
  selector: 'app-adapter',
  template:
    `
    <p>hole = new RoundHole(5)</p>
    <p>rpeg = new RoundPeg(5)</p>
    <p><b>hole.fits(rpeg) =>  {{hole.fits(rpeg)}}</b></p>
    <br>
    <p>small_sqpeg = new SquarePeg(5)</p>
    <p>large_sqpeg = new SquarePeg(10)</p>
    <p><b>hole.fits(small_sqpeg) - incompatible types !!!</b></p>
    <br>
    <p>small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg)</p>
    <p>large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg)</p>
    <p><b>hole.fits(small_sqpeg_adapter) => {{hole.fits(small_sqpeg_adapter)}}</b></p>
    <p><b>hole.fits(large_sqpeg_adapter) => {{hole.fits(large_sqpeg_adapter)}}</b></p>
  `,
  styleUrls: []
})
export class AdapterComponent implements OnInit {

  hole = new RoundHole(5);
  rpeg = new RoundPeg(5);

  small_sqpeg = new SquarePeg(5);
  large_sqpeg = new SquarePeg(10);

  small_sqpeg_adapter = new SquarePegAdapter(this.small_sqpeg);
  large_sqpeg_adapter = new SquarePegAdapter(this.large_sqpeg);

  constructor() { }

  ngOnInit(): void {
  }

}
