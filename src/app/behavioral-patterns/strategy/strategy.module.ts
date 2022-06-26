
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StrategyComponent } from "./strategy.component";

const routes: Routes = [
    {
        path: '',
        component: StrategyComponent,
    },
];

@NgModule({
    declarations: [StrategyComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        StrategyComponent,
    ],
    providers: []
})
export class StrategyModule { }