import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocpropertiesModule } from './docproperties/docproperties.module';
const routes: Routes = [];
@NgModule({
    imports: [RouterModule.forRoot(routes), DocpropertiesModule],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
