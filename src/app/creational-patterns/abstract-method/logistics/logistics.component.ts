import { Component, OnInit } from '@angular/core';
import { Logistics } from '../logistic';
import { RoadLogistics } from '../road-logistics';
import { SeaLogistics } from '../see-logistics';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.scss']
})
export class LogisticsComponent implements OnInit {
  logisticsPlan: string[] = [];
  truckFleet: string[] = [];
  shipFleet: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  baseLogistics(logistics: Logistics) {
    this.logisticsPlan.push(logistics.planDelivery())
  }

  createTruck(): void {
    const roadLogistics = new RoadLogistics();
    this.baseLogistics(roadLogistics);
    const truck = roadLogistics.createTransport();
    console.log(truck);
    this.truckFleet.push(truck.addToLogistics());
  }

  createShip(): void {
    const seaLogistics = new SeaLogistics();
    this.baseLogistics(seaLogistics);
    const ship = seaLogistics.createTransport();
    this.shipFleet.push(ship.addToLogistics());
  }

}
