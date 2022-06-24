import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdapterComponent } from "./adapter.component";

const routes: Routes = [
    {
        path: '',
        component: AdapterComponent,
    },
];

@NgModule({
    declarations: [AdapterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        AdapterComponent,
    ],
    providers: []
})
export class AdapterModule { }