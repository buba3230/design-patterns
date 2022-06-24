
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DecoratorComponent } from "./decorator.component";

const routes: Routes = [
    {
        path: '',
        component: DecoratorComponent,
    },
];

@NgModule({
    declarations: [DecoratorComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        DecoratorComponent,
    ],
    providers: []
})
export class DecoratorModule { }