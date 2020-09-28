import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	IgxIconModule,
	IgxInputGroupModule,
	IgxCheckboxModule,
	IgxComboModule
} from 'igniteui-angular';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxCheckboxModule,
        IgxComboModule
    ],
    exports: [
        IgxIconModule,
        IgxInputGroupModule,
        IgxCheckboxModule,
        IgxComboModule
    ]
})
export class InfragisticsImportsModule {
}
