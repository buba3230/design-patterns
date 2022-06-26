
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VisitorComponent } from "./visitor.component";

const routes: Routes = [
    {
        path: '',
        component: VisitorComponent,
    },
];

@NgModule({
    declarations: [VisitorComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        VisitorComponent,
    ],
    providers: []
})
export class VisitorModule { }