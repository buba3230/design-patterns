import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BridgeComponent } from "./bridge.component";

const routes: Routes = [
    {
        path: '',
        component: BridgeComponent,
    },
];

@NgModule({
    declarations: [BridgeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        BridgeComponent,
    ],
    providers: []
})
export class BridgeModule { }