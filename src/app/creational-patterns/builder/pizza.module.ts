import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PizzaComponent } from "./pizza.component";

const routes: Routes = [
    {
        path: '',
        component: PizzaComponent,
    },
];

@NgModule({
    declarations: [PizzaComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        PizzaComponent,
    ],
    providers: []
})
export class PizzaModule { }