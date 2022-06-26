
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ObserverComponent } from "./observer.component";

const routes: Routes = [
    {
        path: '',
        component: ObserverComponent,
    },
];

@NgModule({
    declarations: [ObserverComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        ObserverComponent,
    ],
    providers: []
})
export class ObserverModule { }