import { Component, Input, OnInit } from '@angular/core';
import { HeadsetInterface } from '../abstract-factory.interface';

@Component({
  selector: 'headset',
  templateUrl: './headset.component.html',
  styleUrls: ['./headset.component.scss']
})
export class HeadsetComponent implements OnInit {
  @Input() item: HeadsetInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
