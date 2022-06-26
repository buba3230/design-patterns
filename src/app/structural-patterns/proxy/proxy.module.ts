
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProxyComponent } from "./proxy.component";

const routes: Routes = [
    {
        path: '',
        component: ProxyComponent,
    },
];

@NgModule({
    declarations: [ProxyComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        ProxyComponent,
    ],
    providers: []
})
export class ProxyModule { }