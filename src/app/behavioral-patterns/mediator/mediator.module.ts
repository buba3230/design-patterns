
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MediatorComponent } from "./mediator.component";

const routes: Routes = [
    {
        path: '',
        component: MediatorComponent,
    },
];

@NgModule({
    declarations: [MediatorComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        MediatorComponent,
    ],
    providers: []
})
export class MediatorModule { }