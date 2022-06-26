
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChainComponent } from "./chain.component";

const routes: Routes = [
    {
        path: '',
        component: ChainComponent,
    },
];

@NgModule({
    declarations: [ChainComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        ChainComponent,
    ],
    providers: []
})
export class ChainModule { }