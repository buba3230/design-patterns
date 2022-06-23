import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CloneComponent } from "./clone/clone.component";

const routes: Routes = [
    {
        path: '',
        component: CloneComponent,
    },
];

@NgModule({
    declarations: [CloneComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        CloneComponent,
    ],
    providers: []
})
export class PrototypeModule { }