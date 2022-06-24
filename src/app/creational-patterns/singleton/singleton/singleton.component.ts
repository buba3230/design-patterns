import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton';

@Component({
  selector: 'app-singleton',
  template:
    `<h4>Singleton 1 (created with msg = 'Singleton 1'): </h4>
  {{s1.getMsg()}}
  <h4>Singleton 2 (created with msg = 'Singleton2' but we got only one instance): </h4>
  {{s2.getMsg()}}`,
  styleUrls: []
})
export class SingletonComponent implements OnInit {
  s1 = Singleton.getInstance('Singleton 1');
  s2 = Singleton.getInstance('Singleton 2');
  constructor() { }

  ngOnInit(): void {
  }

}
