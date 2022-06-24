import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }
  abstractFactory(): void {
    this.router.navigate(['abstract-factory']);
  }

  abstractMethod(): void {
    this.router.navigate(['abstract-method']);
  }

  builder(): void {
    this.router.navigate(['builder']);
  }

  prototype(): void {
    this.router.navigate(['prototype']);
  }

  singleton(): void {
    this.router.navigate(['singleton']);
  }

  adapter(): void {
    this.router.navigate(['adapter']);
  }
}
