
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplateMethodComponent } from "./template-method.component";

const routes: Routes = [
    {
        path: '',
        component: TemplateMethodComponent,
    },
];

@NgModule({
    declarations: [TemplateMethodComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        TemplateMethodComponent,
    ],
    providers: []
})
export class TemplateMethodModule { }