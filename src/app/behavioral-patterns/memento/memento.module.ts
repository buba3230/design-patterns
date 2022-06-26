
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MementoComponent } from "./memento.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: MementoComponent,
    },
];

@NgModule({
    declarations: [MementoComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        MementoComponent,
    ],
    providers: []
})
export class MementoModule { }