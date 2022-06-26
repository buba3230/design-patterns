
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StateComponent } from "./state.component";

const routes: Routes = [
    {
        path: '',
        component: StateComponent,
    },
];

@NgModule({
    declarations: [StateComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        StateComponent,
    ],
    providers: []
})
export class StateModule { }