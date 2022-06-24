import { Component, OnInit } from '@angular/core';
import { Box } from './box';
import { Product } from './product';

@Component({
  selector: 'app-composite',
  template:
    `
    <h4>We have simple order with 1 product</h4>
    <p>simpleOrder = new Product('Apple', 10)</p>
    <p><b>simpleOrder.calculatePrice()</b> => {{simpleOrderPirce}}</p>
    <br>
    <h4>And composite order with boxes of products</h4>
    <p>order = new Box()</p>
    <p>box1 = new Box()</p>
    <p>box1.add(new Product('Cranberries', 15))</p>
    <p>box1.add(new Product('Cherry', 22))</p>
    <p>box2 = new Box()</p>
    <p>box2.add(new Product('Tomatoes', 17))</p>
    <p>order.add(box1)</p>
    <p>order.add(box2)</p>
    <p><b>order.calculatePrice()</b> => {{orderPrice}}</p>
    `,
  styleUrls: []
})
export class CompositeComponent implements OnInit {

  simpleOrder = new Product('Apple', 10);
  simpleOrderPirce: number;

  order = new Box();
  orderPrice: number;

  constructor() { }

  ngOnInit(): void {
    this.createOrder();
    this.simpleOrderPirce = this.simpleOrder.calculatePrice();
    this.orderPrice = this.order.calculatePrice();
  }

  createOrder(): number {
    const box1 = new Box();
    box1.add(new Product('Cranberries', 15));
    box1.add(new Product('Cherry', 22));
    const box2 = new Box();
    box2.add(new Product('Tomatoes', 17));
    this.order.add(box1);
    this.order.add(box2);

    return this.order.calculatePrice();
  }

}
