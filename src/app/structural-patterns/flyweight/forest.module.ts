
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForestComponent } from "./forest.component";

const routes: Routes = [
    {
        path: '',
        component: ForestComponent,
    },
];

@NgModule({
    declarations: [ForestComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        ForestComponent,
    ],
    providers: []
})
export class ForestModule { }