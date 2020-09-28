import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocpropertiesRoutingModule } from './docproperties-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InfragisticsImportsModule } from '../infragistics-imports/infragistics-imports.module';
import { DocpropertiesComponent } from './docproperties/docproperties.component';
import { IgxComboModule, IgxCheckboxModule } from 'igniteui-angular';
@NgModule({
    declarations: [DocpropertiesComponent],
    imports: [
        CommonModule,
        DocpropertiesRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        InfragisticsImportsModule,
        IgxComboModule,
        IgxCheckboxModule
    ],
    exports: [
        DocpropertiesComponent
    ]
})
export class DocpropertiesModule {
}
