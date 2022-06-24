import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompositeComponent } from "./composite.component";

const routes: Routes = [
    {
        path: '',
        component: CompositeComponent,
    },
];

@NgModule({
    declarations: [CompositeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        CompositeComponent,
    ],
    providers: []
})
export class CompositeModule { }