import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogisticsComponent } from "./logistics/logistics.component";

const routes: Routes = [
    {
        path: '',
        component: LogisticsComponent,
    },
];

@NgModule({
    declarations: [LogisticsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        LogisticsComponent,
    ],
    providers: []
})
export class LogisticsModule { }