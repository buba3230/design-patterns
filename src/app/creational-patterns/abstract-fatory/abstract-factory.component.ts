import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractItem, HeadsetInterface } from './abstract-factory.interface';
import { WoodHeadset } from './wood-headset';
@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbstractFactoryComponent implements OnInit {

  budgetHeadset: HeadsetInterface = { table: null, chair: null };

  premiumHeadset: HeadsetInterface = { table: null, chair: null };;

  table: AbstractItem;

  constructor() {
    const budget = new WoodHeadset('Budget Wood Headset');
    this.budgetHeadset.table = budget.createTable('Oak', 'Gray Oak', 2000);
    this.budgetHeadset.chair = budget.createChair('Oak', 'Gray Oak', 1100);

    const premium = new WoodHeadset('Premium Wood Headset');
    this.premiumHeadset.table = premium.createTable('Red Cedar', 'Cherry', 3500);
    this.premiumHeadset.chair = premium.createChair('Red Cedar', 'Cherry', 2300);
  }



  ngOnInit(): void {
  }

}
