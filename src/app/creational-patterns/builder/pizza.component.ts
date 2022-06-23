import { Component, OnInit } from '@angular/core';
import { PizzaBuilder } from './pizza.builder';
import { PizzaDirector } from './pizza.director';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  builder: PizzaBuilder = new PizzaBuilder();
  director: PizzaDirector = new PizzaDirector();
  minimalPizzaProducts: string;
  maximalPizzaProducts: string;
  customPizza: string;
  constructor() {
    this.builder = new PizzaBuilder();
    this.director.setBuilder(this.builder);
    this.director.buildMinimalProductsPizza();
    this.minimalPizzaProducts = this.builder.getPizza().productsList();
    this.director.buildMaximalProductsPizza();
    this.maximalPizzaProducts = this.builder.getPizza().productsList();
  }

  ngOnInit(): void {

  }

  reset(): void {
    this.builder.reset();
    this.customPizza = this.builder.getPizza().productsList();
  }

  addCheese(): void {
    this.builder.addCheese();
  }

  public addMeat(): void {
    this.builder.addMeat();
  }

  public addSausage(): void {
    this.builder.addSausage();
  }

  public addTomatoes(): void {
    this.builder.addTomatoes();
  }

  public addPineapple(): void {
    this.builder.addPineapple();
  }

  public addKetchup(): void {
    this.builder.addKetchup();
  }

  public addMayonnaise(): void {
    this.builder.addMayonnaise();
  }

  getCustomPizza(): void {
    this.customPizza = this.builder.getPizza().productsList();
  }

}
