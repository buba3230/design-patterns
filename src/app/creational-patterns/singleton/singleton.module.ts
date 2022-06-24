import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingletonComponent } from "./singleton/singleton.component";

const routes: Routes = [
    {
        path: '',
        component: SingletonComponent,
    },
];

@NgModule({
    declarations: [SingletonComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        SingletonComponent,
    ],
    providers: []
})
export class SingletonModule { }