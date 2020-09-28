import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocpropertiesComponent } from './docproperties/docproperties.component';
const routes: Routes = [];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocpropertiesRoutingModule {
}
