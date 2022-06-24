
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FacadeComponent } from "./facade.component";

const routes: Routes = [
    {
        path: '',
        component: FacadeComponent,
    },
];

@NgModule({
    declarations: [FacadeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        FacadeComponent,
    ],
    providers: []
})
export class FacadeModule { }