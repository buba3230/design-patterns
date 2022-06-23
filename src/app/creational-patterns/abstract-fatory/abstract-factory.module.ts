import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AbstractFactoryComponent } from "./abstract-factory.component";
import { HeadsetComponent } from "./headset/headset.component";
import { WoodHeadset } from "./wood-headset";


const routes: Routes = [
    {
        path: '',
        component: AbstractFactoryComponent,
    },
];

@NgModule({
    declarations: [AbstractFactoryComponent, HeadsetComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        AbstractFactoryComponent, HeadsetComponent,
    ],
    providers: []
})
export class AbstractFactoryModule { }