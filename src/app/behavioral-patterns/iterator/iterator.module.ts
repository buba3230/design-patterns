
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IteratorComponent } from "./iterator.component";

const routes: Routes = [
    {
        path: '',
        component: IteratorComponent,
    },
];

@NgModule({
    declarations: [IteratorComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        IteratorComponent,
    ],
    providers: []
})
export class IteratorModule { }