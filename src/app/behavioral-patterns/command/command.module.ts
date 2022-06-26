
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommandComponent } from "./command.component";

const routes: Routes = [
    {
        path: '',
        component: CommandComponent,
    },
];

@NgModule({
    declarations: [CommandComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        CommandComponent,
    ],
    providers: []
})
export class CommandModule { }